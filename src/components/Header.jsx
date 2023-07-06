import React from 'react';
import "../index.css";

const Header = () => {
  return (
    <div className="p-5 text-center bg-image rounded-3 banner">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="hero-text text-white">
          <h1 className="mb-3">¡Pizzería Mamma Mia!</h1>
          <h3 className="mb-3">¡Tenemos las mejores pizzas que podrás encontrar!</h3>
          <hr/>
        </div>
      </div>
    </div>
  );
};

export default Header;
