import React, {useContext} from 'react'
import Context from '../context/Context'
import Button from 'react-bootstrap/Button';


export default function Carrito() {
  const {agregar, incrementar, decrement} = useContext (Context);
  const total = agregar.reduce((a, {count, price}) => a + price*count, 0);

  return (
    <div className ="carrito p-5">
      <div className="detalles bg-ligth w-75 m-auto p-5">
        <h5>Detalles del pedido: </h5>
        <div className="p3 bg-white">
          {agregar.map((producto, i) => (
            <div key={i} className="d-flex justify-content-between py-2"> 

              <div className ="d-flex justify-content-between aling-item-center">
                <img src={producto.img} width="50" alt=""/>
                <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
              </div>
              <div className ="d-flex justify-content-end aling-item-center">
                <h6 className="mb-0 p-2 text-success">${(producto.price*producto.count).toLocaleString("es-Cl")}</h6>
              <Button variant="danger" onClick={() => decrement(i)}>-</Button>
              <b className ="mx-2">{producto.count}</b>
              <Button variant="primary" onClick={() => incrementar(i)}>+</Button>
              </div>
            </div>
          ))}
          <h3 className="my-4">Total: ${total.toLocaleString("es-Cl")}</h3>
          <Button variant="success">Ir a pagar</Button>
        </div>

      </div>
    </div>
  )
}
