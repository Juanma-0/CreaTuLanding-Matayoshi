
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import "../App.css";
import "./ItemListContainer.css";
import { getProducts } from '../config/firebaseService';

function ItemListContainer({ message, category }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                console.log('ItemListContainer: Llamando a getProducts...');
                const products = await getProducts();
                console.log('ItemListContainer: Productos recibidos:', products);
                setItems(category
                    ? products.filter(prod => prod.categoria?.toLowerCase() === category.toLowerCase())
                    : products);
            } catch (e) {
                setError(e);
                console.error("ItemListContainer: Error fetching data:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error al cargar los productos: {error.message}</div>;
    }

    return (
        <div>
            <h2>{message}</h2>
            <ul className="item-list">
                {items.map((item) => (
                    <li key={item.id}>
                        <ItemCard item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;