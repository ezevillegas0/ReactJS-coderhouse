import "./navBar.css"
import logo from "./assets/sneakershouselogo.jpg"
import CardWidget from "../CardWidget/CardWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navNavbar">
            
            <Link className="tituloNavBar" to={"/"}>
            <img className="logoSneakerHouse" src={logo}></img>
            <h1 > Sneakers House</h1>
            </Link>
            <div className="contenedorBotones" >
                <Link to={"/category/Nike"} className=" btn btn-info botonZapatillas">Nike</Link>
                <Link to={"/category/Adidas"} className=" btn btn-info botonZapatillas">Adidas</Link>
                <Link to={"/category/Jordan"} className=" btn btn-info botonZapatillas">Jordan</Link>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar