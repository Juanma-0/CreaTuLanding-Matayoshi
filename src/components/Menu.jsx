import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";
import "./Menu.css";

function Menu() {
    return (
        <ul className="menu">
            <li><Link to="/Cerveza">Cerveza</Link></li>
            <li><Link to="/Vodka">Vodka</Link></li>
            <li><Link to="/Ron">Ron</Link></li>
            <li><Link to="/Whisky">Whisky</Link></li>
        </ul>
    );
}

export default Menu;