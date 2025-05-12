import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Menu from "./components/Menu";
import CategoryPage from "./components/CategoryPage";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";





function App() {
  return (
    <BrowserRouter>
      <CartProvider> {}
        <div>
          <NavBar />
          <Menu />
          <Routes>
            <Route path="/" element={<ItemListContainer message="Bienvenido!" />} />
            <Route path="/:categoria" element={<CategoryPage />} />
            <Route path="/item/:id" element={<ItemDetail />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
