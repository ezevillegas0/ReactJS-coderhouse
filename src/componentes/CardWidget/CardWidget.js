import cart from "./assets/carrito.png"
import "./CardWidgets.css"

const CardWidget = () => {
    return (
        <div className="contenedorLogo">
            <img className="logo" src={cart} alt="logo sneakers"/>
            10
        </div>
    )
}

export default CardWidget