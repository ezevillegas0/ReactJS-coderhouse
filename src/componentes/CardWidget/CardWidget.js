import cart from "./assets/carrito.png"
import "./CardWidgets.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CardWidget = () => {

    const {totalQuantity} = useContext(CartContext)





    return (
        <div to='/cart' className="contenedorLogo">
            <img className="logo" src={cart} alt="logo sneakers"/>
            {totalQuantity}
        </div>
    )
}

export default CardWidget