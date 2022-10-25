import React from "react"
import { CartContext }from '../../context/CartContext'
import { useContext } from "react"

const Cart = () => {

    const  { cart, removeItem, total, clearCart } = useContext(CartContext)

    
    return(
        <div> 
            <h1>Cart</h1>
            {
              cart.map(prod => (
                <div>
                    {prod.nombre} - cantidad: {prod.quantity}
                    <button onClick={ () => removeItem(prod.id)}>remover</button>
                   
                </div>
                ))
            }
            <div>
                Precio total: {total}
            </div> 
            <button onClick={ () => clearCart()}>Limpiar el carrito </button>
        </div>

        

    )
}

export default Cart