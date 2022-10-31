import cart from "./assets/carrito.png"
import "./CardWidgets.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'


const CardWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <Link to='/cart' className="contenedorLogo btn btn-info" onClick={() => navigate('/cart')}>
            <img className="logoCarrito" src={cart} alt="logo carrito de compras"/>
            {totalQuantity}
        </Link>
    )
}

export default CardWidget