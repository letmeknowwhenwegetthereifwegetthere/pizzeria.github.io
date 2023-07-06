import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../context/Context";
import Button from "react-bootstrap/Button";

export default function PizzaDetalle() {
  const [pizzaDetail, setPizzadetail] = useState({});
  const { lista, addtoCard } = useContext(Context);
  const { id } = useParams();

  const obtenerDatos = () => {
    const datosPizza = lista.find((pizza) => pizza.id === id);
    setPizzadetail(datosPizza);
  };

  useEffect(() => {
    obtenerDatos();
  }, [lista]);

  return (
    <>
      <div className="container mt-5">
        <div className="card mb-3 estilos">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={pizzaDetail.img}
                className="img-fluid estilos rounded-start"
                alt={pizzaDetail.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {pizzaDetail.name}
                </h5>
                <hr />
                <p className="card-text">{pizzaDetail.desc}</p>
                <b>Ingredientes:</b>
                <ul>
                  {pizzaDetail.ingredients?.map((ingredient, i) => (
                    <li key={i}>🍕{ingredient}</li>
                  ))}
                </ul>

                <div className="d-flex justify-content-around">
                  <h4>Precio: ${pizzaDetail.price}</h4>
                </div>
                <Button
                  variant="success"
                  onClick={() => addtoCard(pizzaDetail)}
                >
                  Añadir 🛒
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
