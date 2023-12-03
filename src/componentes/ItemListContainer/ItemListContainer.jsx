import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const [isLoading, setIsLoading] = useState(true);
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoria]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ItemList productos={productos} titulo={titulo} />
      )}
    </div>
  );
};

export default ItemListContainer;
