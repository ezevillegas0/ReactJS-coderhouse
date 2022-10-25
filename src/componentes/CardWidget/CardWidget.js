import cart from "./assets/carrito.png"
import "./CardWidgets.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Cart from "../Cart/Cart";
import { Link, useNavigate } from 'react-router-dom'


const CardWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <Link to='/cart' className="contenedorLogo" onClick={() => navigate('/cart')}>
            <img className="logo" src={cart} alt="logo sneakers"/>
            {totalQuantity}
        </Link>
    )
}

export default CardWidget