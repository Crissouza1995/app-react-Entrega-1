import React, {useState,useContext} from "react";

const CartContext = React.createContext();

export const useCartContext = ()=> useContext (CartContext)


const CartProvider = ({ children }) =>{

    const [cart,setCart]= useState ([]);

    const addProduct = (item, newQuantity)=>{

        if (!cart.some(prod=>prod.id === item)){

            setCart(prevCart => [...prevCart,{id:item, quantity:newQuantity}])

        }
    }

   console.log ('carrito',cart)

    const clearCart =()=> setCart ([]);

    const isInCar = (id) => cart.find (product=>product.id === id) ? true : false;

    const removeProduct = (id) => setCart (cart.filter(product => product.id !== id));
   
    return (
        <CartContext.Provider value={{
            clearCart,
            isInCar,
            removeProduct,
            addProduct
        }}> 
         
         {children}

        </CartContext.Provider>
    )

}

export default CartProvider;