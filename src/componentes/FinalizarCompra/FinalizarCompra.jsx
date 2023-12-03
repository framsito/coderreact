import { useContext, useState } from "react";
import CartContext from "../Context/CartContex/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import argentinaFlag from "../../../media/img/argentina-flag.png"; // Importa la bandera de Argentina

const FinalizarCompra = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">¡Muchas gracias por tu compra!</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
        <img src={argentinaFlag} alt="Bandera de Argentina" />
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="main-title">Finaliza tu compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text" required placeholder="Ingresá tu nombre" {...register("nombre")}
        />
        <input
          type="email" required placeholder="Ingresá tu e-mail" {...register("email")}
        />
        <input
          type="email" required placeholder="Repetir e-mail" {...register("email")}
        />
        <input
          type="number" required placeholder="Ingresá tu teléfono" {...register("email")}
        />
        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
      <img src={argentinaFlag} alt="Bandera de Argentina" />
    </div>
  );
};

export default FinalizarCompra;