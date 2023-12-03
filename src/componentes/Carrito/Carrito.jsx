import React, { useContext } from "react";
import { CartContext } from "../Context/CartContex/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, eliminarItem } = useContext(CartContext);

  const handleEliminarItem = (id) => {
    eliminarItem(id);
  };

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
          <div>
            <h3>{prod.titulo}</h3>
            <p>Precio unitario: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
          </div>
          <button className="red" onClick={() => handleEliminarItem(prod.id)}>Eliminar producto</button>
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
        <>
        <h2>Tu carrito está vacío</h2>
        <br/>
        <button className="fincompra">
            <Link to="/">Volver</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Carrito;
