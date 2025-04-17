import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

function CategoryPage() {
const { categoria } = useParams();

return (
    <div>
    <h2>Productos de la categoría: {categoria}</h2>
    <ItemListContainer category={categoria} />
    </div>
);
}

export default CategoryPage;