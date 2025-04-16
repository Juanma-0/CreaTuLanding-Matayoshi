import React, { useState, useEffect } from "react";

function ItemListContainer({ message }) {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const productosLocales = [
    { id: 1, nombre: "Whisky Johnnie Walker Red label", precio: 31586},
    { id: 2, nombre: "Whisky Jack Daniel's", precio: 57900},
    { id: 3, nombre: "Vodka Absolut", precio: 11300 },
    { id: 4, nombre: "Vodka Skyy", precio: 9560 },
    { id: 5, nombre: "Vodka Smirnoff", precio: 7999 },
    { id: 6, nombre: "Ron Capitan Morgan", precio: 34900 },
    { id: 7, nombre: "Ron Havan Club", precio: 12846 },
    { id: 8, nombre: "Ron Santa Teresa", precio: 33688 },
    { id: 9, nombre: "Cerveza Amstel", precio: 3163 },
    { id: 10, nombre: "Cerveza Budweiser", precio: 4092 },
    { id: 11, nombre: "Cerveza Duff", precio: 5780 },
    { id: 12, nombre: "Cerveza Heineken", precio: 4329 },
    ];

useEffect(() => {
    const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = {
        ok: true,
        json: async () => productosLocales,
        };

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setItems(data);
    } catch (e) {
        setError(e);
        console.error("Error fetching data:", e);
    } finally {
        setLoading(false);
    }
    };

    fetchData();
}, []);

if (loading) {
    return <div>Cargando productos...</div>;
}

if (error) {
    return <div>Error al cargar los productos: {error.message}</div>;
}

return (
    <div>
    <h2>{message}</h2>
    <ul>
        {items.map((item) => (
        <li key={item.id}>
            {item.nombre} - Precio: ${item.precio}
        </li>
        ))}
    </ul>
    </div>
);
}

export default ItemListContainer;





