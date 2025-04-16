import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <NavBar />
      <Menu />
      <ItemListContainer message="Bienvenido!" />
    </div>
  );
}

export default App;

