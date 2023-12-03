import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Loading from "../Loading/Loading";  // Asegúrate de que la ruta sea correcta

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        item && <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;