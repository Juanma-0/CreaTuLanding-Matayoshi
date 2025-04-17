import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Menu from "./components/Menu";
import CategoryPage from "./components/CategoryPage";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Menu />
        <Routes>
          <Route path="/" element={<ItemListContainer message="Bienvenido!" />} />
          <Route path="/:categoria" element={<CategoryPage />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
