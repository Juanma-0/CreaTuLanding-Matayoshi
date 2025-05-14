import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";
import "./Menu.css";

function Menu() {
    return (
        <ul className="menu">
            <li><Link to="/cerveza">Cerveza</Link></li>
            <li><Link to="/vodka">Vodka</Link></li>
            <li><Link to="/ron">Ron</Link></li>
            <li><Link to="/whisky">Whisky</Link></li>
        </ul>
    );
}

export default Menu;