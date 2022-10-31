import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='CardCartItem'>
            <h4>{name}</h4>
            <section className='ContainerItemCartItem'>
                <h4 className="InfoCartItem">Cantidad: {quantity}</h4>
                <h4 className="InfoCartItem">price x Unidad: ${price}</h4>
            </section>           
            <footer className='ItemFooterCartItem'>
                <h4 className="InfoCartItem">Subtotal: ${price * quantity}</h4 >
                <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </div>
    )
}

export default CartItem