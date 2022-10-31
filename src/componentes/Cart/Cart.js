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
            <h1 className="tituloPrincipal">No hay items en el carrito</h1>
        )
    }

    return(
        <div className='contenedorCarrito'>    
            <h1 className='tituloPrincipal'>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='tituloCarrito'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button btn btn-info ">Limpiar carrito</button>
            <Link to='/checkout' className='btn btn-info  Button'>Checkout</Link>
        </div>

        

    )
}

export default Cart