import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] =  useState(true)

    const { categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

   if(loading){
    return <h1>Cargando productos...</h1>
   }
 

    return (
        <div>
            <h1 className="tituloPrincipal">{greeting}</h1>
            <div className="contenedorProductos">
               <h1>Listado de productos</h1>
               <ItemList products={products} />
            </div>

        </div>
    ) 
}

export default ItemListContainer