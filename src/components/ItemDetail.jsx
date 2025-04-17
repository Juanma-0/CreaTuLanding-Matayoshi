import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
const { id } = useParams();

return (
    <div>
    <h2>Detalle del Producto con ID: {id}</h2>
      {}
    </div>
);
}

export default ItemDetail;