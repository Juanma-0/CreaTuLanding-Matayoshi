import React, { createContext, useState } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState([]);


const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
    const newCartItems = [...cartItems];
    newCartItems[existingItemIndex].quantity += quantity;
    setCartItems(newCartItems);
    } else {
    setCartItems([...cartItems, { ...product, quantity }]);
    }
};


const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
};


const clearCart = () => {
    setCartItems([]);
};


const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


  const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);

return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, clearCart, totalQuantity, totalPrice }}>
    {children}
    </CartContext.Provider>
);
};