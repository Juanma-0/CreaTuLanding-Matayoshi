import React from "react";
import CartWidget from "./CartWidget";

function NavBar({ children }) {
return (
    <nav>
    <h1>Mi Ecommerce de bebidas</h1>
    {children}
    <CartWidget />
    </nav>
);
}

export default NavBar; 