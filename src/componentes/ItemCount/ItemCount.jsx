const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div>
      <div>
        <button onClick={handleRestar} className="btn-carro">
          -
        </button>
        <p>{cantidad}</p>
        <button onClick={handleSumar} className="btn-carro">
          +
        </button>
      </div>
      <button onClick={handleAgregar} className="btn-comprar">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
