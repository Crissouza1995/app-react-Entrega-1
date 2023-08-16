import React, { useState, useContext } from "react";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []);

  const addProduct = (item, newQuantity, price, name, img) => {
    if (!cart.some((prod) => prod.id === item)) {
      setCart((prevCart) => [
        ...prevCart,
        { id: item, quantity: newQuantity, price, name, img },
      ]);
    } else {
      setCart((sameProduct) =>
        sameProduct.map((product) => {
          if (product.id === item) {
            return { ...product, quantity: product.quantity + newQuantity };
          }
          return product;
        })
      );
    }
    console.log("Price en context", price);
  };

  const amountOfItemsInCart = () =>
    cart.reduce((acc, item) => (acc += item.quantity), 0);

  const totalCartPrice = () =>
    cart.reduce((acc, item) => (acc += item.price * item.quantity), 0);

  const clearCart = () => setCart([]);

  const isInCar = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeItemFromCart = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        addProduct,
        clearCart,
        isInCar,
        removeItemFromCart,
        cart,
        amountOfItemsInCart,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
