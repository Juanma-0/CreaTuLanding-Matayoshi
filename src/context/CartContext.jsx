import React, { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

// Crear el proveedor del carrito
export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState([]);

  // Función para agregar un item al carrito
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

  // Función para eliminar un item del carrito
const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
};

  // Función para limpiar el carrito
const clearCart = () => {
    setCartItems([]);
};

  // Calcular la cantidad total de items en el carrito
const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calcular el precio total del carrito
  const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);

return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, clearCart, totalQuantity, totalPrice }}>
    {children}
    </CartContext.Provider>
);
};