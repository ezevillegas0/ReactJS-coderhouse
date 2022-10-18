import './ItemDetail.css'
import Counter from "../Counter/Counter"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, nombre, img, category, descripcion, precio, stock }) => {

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, nombre, precio, quantity
        }
        //console.log(productToAdd)
        addItem(productToAdd)
    }

    return (
        <article className="CardItem">
        <header>
            <h2 className="ItemHeader">
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={img} alt={nombre} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Categoria: {category}
            </p>
            <p className="Info">
                Descripción: {descripcion}
            </p>
            <p className="Info">
                Precio: $ {precio}
            </p>
        </section>           
        <footer>
            <Counter onAdd={handleOnAdd} stock={stock} />
        </footer>
    </article>
    )

}

export default ItemDetail