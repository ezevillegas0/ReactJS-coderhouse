import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = ({greeting}) => {

    document.title= "Productos" 
    const { categoryId} = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

   if(loading){
    return <h1 className="tituloPrincipal">Cargando productos...</h1>
   }

   if(error){
    return <h1>Hubo un error...</h1>
   }
 
    return (
        <div>
            <h1 className="tituloPrincipal">{greeting}</h1>
            <div className="contenedorProductos">
               <h1 className="tituloListadoProductos" >Listado de productos</h1>
               <ItemList products={products} />
            </div>
        </div>
    ) 
}

export default ItemListContainer