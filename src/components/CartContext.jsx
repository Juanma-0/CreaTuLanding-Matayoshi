import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalQuantity, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};