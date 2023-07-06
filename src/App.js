import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './views/Home';
import Carrito from './views/Carrito';
import PizzaDetalle from './views/PizzaDetalle';

const App = () => {
  const [lista, setLista] = useState([]);
  const [agregar, setAgregar] = useState([]);

  const getPizza = async () => {
    const res = await fetch('./pizzas.json');
    const data = await res.json();
    setLista(data);
    console.log(data);
  };

  useEffect(() => {
    getPizza();
  }, []);

  // funciones para el carro
  const addtoCard = ({ id, price, name, img }) => {
    const productoEncontradoIndex = agregar.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEncontradoIndex >= 0) {
      agregar[productoEncontradoIndex].count++;
      setAgregar([...agregar]);
    } else {
      setAgregar([...agregar, producto]);
    }
  };

  const incrementar = (i) => {
    agregar[i].count++;
    setAgregar([...agregar]);
  };

  const decrement = (i) => {
    const { count } = agregar[i];
    if (count === 1) {
      agregar.splice(i, 1);
    } else {
      agregar[i].count--;
    }
    setAgregar([...agregar]);
  };

  return (
    <div className="App">
      <Context.Provider value={{ lista, setLista, agregar, setAgregar, incrementar, decrement, addtoCard }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pizza/:id" element={<PizzaDetalle />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
