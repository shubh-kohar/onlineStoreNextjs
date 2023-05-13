"use client";
const { createContext, useState } = require("react");

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [mycart, setMycart] = useState([]);

  const addToCart = (item) => {
    setMycart([...mycart, item]);
  };

  const removeFromCart = (productId) => {
    const index = mycart.findIndex(
        (item) => item.id === productId
      );

      let newList = [...mycart];

      if (index >= 0) {
        newList.splice(index, 1);
      }

      setMycart(newList)
  };

  const values = {
    mycart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;
