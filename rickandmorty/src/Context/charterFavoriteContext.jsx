import { createContext, useEffect, useState } from "react";
import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);


  const addItemToCart = async (product) => {
    const { name, img, price } = product;

    await axios.post("https://rickandmortyapi.com/api/character", { name, img, price });

  };


  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider value={{addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;