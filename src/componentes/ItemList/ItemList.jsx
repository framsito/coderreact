import Item from "../Item/Item";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h1>Bienvenido a la tienda de los campeones del mundo</h1>
      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};
export default ItemList;
