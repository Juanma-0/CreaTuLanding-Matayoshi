import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../App.css";
import "./NavBar.css";
import cartIcon from '../assets/carrito-imagen.png';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title">
                <h1>Tomate un trago</h1>
            </Link>
            <div>
                <Link to="/cart" className="cart-button">
                    <img src={cartIcon} alt="Carrito" className="cart-icon" />
                </Link>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;