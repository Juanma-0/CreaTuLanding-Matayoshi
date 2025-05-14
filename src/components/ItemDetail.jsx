import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from '../components/CartContext';
import "./ItemDetail.css";
import { getProductById } from '../config/firebaseService';

function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedProduct = await getProductById(id);
                setProduct(fetchedProduct);
            } catch (error) {
                setError(error);
                console.error("Error al cargar el detalle del producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            alert(`"${product.nombre}" (x${quantity}) ha sido agregado al carrito.`);
        }
    };

    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (error) {
        return <p>Hubo un error al cargar los detalles del producto.</p>;
    }

    if (!product) {
        return <p>No se encontró el producto con ID: {id}</p>;
    }

    return (
        <div className="item-detail">
            <h2>{product.nombre}</h2>
            <img src={product.Image} alt={product.nombre} className="item-image" />
            <p className="item-price">Precio: ${product.precio}</p>
            <p className="item-description">{product.descripcion}</p>

            <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
            </div>

            {product.stock > 0 ? (
                <button onClick={handleAddToCart} className="add-to-cart-button">
                    Agregar al carrito
                </button>
            ) : (
                <p className="out-of-stock">Sin stock</p>
            )}
        </div>
    );
}

export default ItemDetail;