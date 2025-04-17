import React from "react";
import { Link } from "react-router-dom";

function Menu() {
return (
    <ul>
    <li><Link to="/cerveza">Cerveza</Link></li>
    <li><Link to="/vodka">Vodka</Link></li>
    <li><Link to="/ron">Ron</Link></li>
    <li><Link to="/whisky">Whisky</Link></li>
    </ul>
);
}

export default Menu;