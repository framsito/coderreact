import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContex/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(item, cantidad);
    setAgregado(true);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.img} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="sinopsis">
            Contexto:
            <br /> {item.contexto}
          </p>
          <p className="precio">$ {item.precio}</p>
          {agregado ? (
            <>
              <Link to="/carrito">
                <button>Ir al carrito</button>
              </Link>
              <Link to="/">
                <button>Volver</button>
              </Link>
            </>

          ) : (
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={handleAgregarAlCarrito}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;