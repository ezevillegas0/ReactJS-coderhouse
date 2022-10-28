import './Cart.css'
import React from "react"
import { CartContext }from '../../context/CartContext'
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { Link } from 'react-router-dom'

const Cart = () => {

    const  { cart, removeItem, total, clearCart, totalQuantity } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return(
        <div>    
            <h1>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button btn btn-dark ">Limpiar carrito</button>
            <Link to='/checkout' className='btn btn-dark  Button'>Checkout</Link>
        </div>

        

    )
}

export default Cart