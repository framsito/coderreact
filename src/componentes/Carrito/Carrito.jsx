import React, { useContext } from "react";
import { CartContext } from "../Context/CartContex/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <br />
          <h3>{prod.titulo}</h3>
          <p>Precio unitario: ${prod.precio}</p>
          <p>Precio total: ${prod.precio * prod.cantidad}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <br />
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2 className="precio-total">Precio total: ${precioTotal()}</h2>
          <button onClick={handleVaciar} className="btn-vaciar">Vaciar</button>
          <button className="fincompra">
          <Link to="/finalizar" className="finalizar">Finalizar compra</Link>
          </button>
        
        </>
      ) : (
        <h2>Tu carrito está vacío</h2>
      )}
    </div>
  );
};

export default Carrito;
