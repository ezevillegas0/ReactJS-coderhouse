import "./navBar.css"
import CardWidget from "../CardWidget/CardWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navNavbar">
            <Link className="tituloNavBar" to={"/"}>
            <h1 > Sneakers House</h1>
            </Link>
            <div className="contenedorBotones" >
                <Link to={"/category/Nike"} className=" btn btn-dark botonZapatillas">Nike</Link>
                <Link to={"/category/Adidas"} className=" btn btn-dark botonZapatillas">Adidas</Link>
                <Link to={"/category/Jordan"} className=" btn btn-dark botonZapatillas">Jordan</Link>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar