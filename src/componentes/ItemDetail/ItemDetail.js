import './ItemDetail.css'
import Counter from "../Counter/Counter"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useCart  } from '../../context/CartContext'
import { NotificationContext } from '../../notification/NotificationService'

const ItemDetail = ({ id, nombre, img, category, descripcion, precio, stock }) => {

    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)


    const handleOnAdd = (quantity) => {


    
        const productToAdd = {
            id, 
            nombre,
            precio
        }

        addItem(productToAdd, quantity)
        setNotification('success', `Se agrego correctamente ${quantity} ${nombre}`) 

        /*    const productToAdd = {
            id, nombre, precio, quantity
        }

        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${nombre}`) */
    }

    const quantityAdded = getProductQuantity(id)
 
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
            <Counter onAdd={handleOnAdd} stock={stock} initial={quantityAdded}  />
        </footer>
    </article>
    )

}

export default ItemDetail