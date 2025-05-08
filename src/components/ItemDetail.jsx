import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from '../context/CartContext'; // Asegúrate de tener este contexto
import "./ItemDetail.css"; // Archivo de estilos para ItemDetail



function ItemDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad
  const { addToCart } = useContext(CartContext); // Función para agregar al carrito

  useEffect(() => {
    setLoading(true);
    fetch(`/api/productos/${id}`) // Reemplaza con tu lógica de obtención de datos
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
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
      addToCart(product, quantity); // Ahora pasamos el producto y la cantidad
      alert(`"${product.nombre}" (x${quantity}) ha sido agregado al carrito.`);
      // Aquí podrías mostrar una notificación más sofisticada o redirigir al carrito
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
      <img src={product.imagen} alt={product.nombre} className="item-image" />
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
      {/* Más detalles del producto */}
    </div>
  );
}

export default ItemDetail;