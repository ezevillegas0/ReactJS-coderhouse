import './ItemDetail.css'
import Counter from "../Counter/Counter"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, description, price, stock }) => {

    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)


    const handleOnAdd = (quantity) => {
    
        const productToAdd = {
            id, 
            name,
            price
        }

        addItem(productToAdd, quantity)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`) 

    }

    const quantityAdded = getProductQuantity(id)
 
    return (
        <div className="mb-3" >
            <div className="row g-0 cart">
                <div className="col-md-4">
                    <img src={img} className="ItemImg img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="tituloDetail">{name}</h1>
                        <p className='card-text'>{description}{description}</p>
                        <h3 >price: $ {price}</h3>
                    </div>
                    <footer className='ItemFooter'>
                        { stock !== 0 ? <Counter onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p className='NoStock'>No hay stock de este producto</p>}
                        {isInCart(id) && <Link to='/cart' className='btn btn-info finalizar'>Finalizar compra</Link>}
                    </footer>
                </div>
            </div>
        </div>


    )

}

export default ItemDetail