import "./navBar.css"
import CardWidget from "../CardWidget/CardWidget"

const NavBar = () => {
    return (
        <nav className="navNavbar">
            <h1 className="tituloNavBar"> Sneakers House</h1>
            <div className="contenedorBotones" >
                <button className="botonZapatillas">Zapatillas</button>
                <button className="botonZapatillas">Talles</button>
                <button className="botonZapatillas">Pre-ventas</button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar