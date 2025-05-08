import React, { useState, useEffect } from "react";
import "../App.css";

function ItemListContainer({ message, category }) {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const productosLocales = [
    { id: 1, nombre: "Whisky Johnnie Walker Red label", precio: 31586, categoria: "whisky", Image:"/src/assets/Whisky/Red-label.jpeg" },
    { id: 2, nombre: "Whisky Jack Daniel's", precio: 57900, categoria: "whisky", Image:"/src/assets/Whisky/Jack-daniel.jpeg" },
    { id: 3, nombre: "Vodka Absolut", precio: 11300, categoria: "vodka", Image:"/src/assets/Vodka/Absolut.jpeg" },
    { id: 4, nombre: "Vodka Skyy", precio: 9560, categoria: "vodka", Image:"/src/assets/Vodka/Sky.jpeg" },
    { id: 5, nombre: "Vodka Smirnoff", precio: 7999, categoria: "vodka", Image:"/src/assets/Vodka/Smirnoff.jpeg" },
    { id: 6, nombre: "Ron Capitan Morgan", precio: 34900, categoria: "ron", Image:"/src/assets/Ron/Captain-morgan.jpeg" },
    { id: 7, nombre: "Ron Havan Club", precio: 12846, categoria: "ron", Image:"/src/assets/Ron/Havana-club.jpeg" },
    { id: 8, nombre: "Ron Santa Teresa", precio: 33688, categoria: "ron", Image:"/src/assets/Ron/Santa-teresa.jpeg" },
    { id: 9, nombre: "Cerveza Amstel", precio: 3163, categoria: "cerveza", Image:"/src/assets/Cerveza/Amstel.jpeg" },
    { id: 10, nombre: "Cerveza Budweiser", precio: 4092, categoria: "cerveza", Image:"/src/assets/Cerveza/Budweiser.jpeg" },
    { id: 11, nombre: "Cerveza Duff", precio: 5780, categoria: "cerveza", Image:"/src/assets/Cerveza/Duff.jpeg" },
    { id: 12, nombre: "Cerveza Heineken", precio: 4329, categoria: "cerveza", Image:"/src/assets/Cerveza/Heineken.jpeg" },
];

useEffect(() => {
    const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const filteredProducts = category
        ? productosLocales.filter(
            (producto) => producto.categoria.toLowerCase() === category.toLowerCase()
            )
        : productosLocales;

        const response = {
        ok: true,
        json: async () => filteredProducts,
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
    <ul className="item-list"> {}
        {items.map((item) => (
        <li key={item.id} className="item-card"> {}
            <img src={item.imagen} alt={item.nombre} className="item-image" />
            <div className="item-details">
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            {}
            </div>
        </li>
        ))}
    </ul>
    </div>
);
}

export default ItemListContainer;



