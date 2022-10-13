import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] =  useState(true)

    useEffect(() => {
        getProducts().then(response => {
            console.log(response)
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })

    }, [])

   if(loading){
    return <h1>Loading...</h1>
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