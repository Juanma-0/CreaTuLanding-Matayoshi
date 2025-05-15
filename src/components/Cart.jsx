import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { createOrder } from '../config/firebaseService';
import './Cart.css';

function Cart() {
    const { cart, clearCart, getTotalPrice } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');

    if (cart.length === 0) {
        return <p>El carrito está vacío.</p>;
    }

    const handleFinalizarCompra = async () => {
        const order = {
            buyer: {
                nombre,
                email,
                direccion,
            },
            items: cart.map(item => ({
                id: item.id,
                tittle: item.tittle,
                precio: item.precio,
                quantity: item.quantity,
            })),
            total: getTotalPrice(),
            date: new Date(),
        };

        try {
            const orderId = await createOrder(order);
            alert(`¡Compra finalizada con éxito! Su número de orden es: ${orderId}`);
            clearCart();
        } catch (error) {
            alert('Hubo un error al procesar su compra. Por favor, intente nuevamente.');
            console.error('Error al finalizar la compra: ', error);
        }
    };

    return (
        <div className="cart-container">
            <h2>Carrito de compras</h2>
            <ul className="cart-items">
                {cart.map(item => (
                    <li key={item.id} className="cart-item">
                        <div className="cart-item-details">
                            <h3>{item.tittle}</h3>
                            <p>Precio: ${item.precio}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-summary">
                <p>Total: ${getTotalPrice()}</p>
            </div>

            <h3>Datos de Envío</h3>
            <form className="checkout-form">
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="direccion">Dirección:</label>
                    <textarea
                        id="direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </div>
                <button type="button" onClick={handleFinalizarCompra} className="checkout-button">
                    Finalizar Compra
                </button>
                <button type="button" onClick={clearCart} className="clear-button">
                    Vaciar Carrito
                </button>
            </form>
        </div>
    );
}

export default Cart;