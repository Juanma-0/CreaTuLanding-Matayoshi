import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../index.css'; // Importa estilos globales si los necesitas
import './ItemCard.css'; // Crea este archivo para estilos específicos

function ItemCard({ item }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(item, quantity);
        alert(`"${item.nombre}" (x${quantity}) ha sido agregado al carrito.`);
    };

    return (
        <div className="item-card">
            <Link to={`/item/${item.id}`}>
                <img src={item.Image} alt={item.nombre} className="item-image-card" />
                <div className="item-details-card">
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.precio}</p>
                </div>
            </Link>
            <div className="quantity-controls-card">
                <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-button-card">
                Agregar
            </button>
        </div>
    );
}

export default ItemCard;