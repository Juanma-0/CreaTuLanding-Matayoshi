import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Menu from "./components/Menu";
import CategoryPage from "./components/CategoryPage";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <div className="app">
                    <NavBar />
                    <Menu />
                    <Routes>
                        <Route path="/" element={<ItemListContainer message="¡Bienvenido!" />} />
                        <Route path="/:categoria" element={<CategoryPage />} />
                        <Route path="/item/:id" element={<ItemDetail />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
