import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, nombre, quantity, precio }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    // const handleOnAdd = (quantity) => {
    //     const productToAdd = {
    //         id, name, price, quantity
    //     }

    //     addItem(productToAdd)
    //     setNotification('success', `Se agrego actualizo ${quantity} ${name}`)
    // }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {nombre}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItem">
                    Precio x Unidad: ${precio}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${precio * quantity}
                 </p>
                 {/* <ItemCount onAdd={handleOnAdd} stock={stock}/> */}
                 <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem