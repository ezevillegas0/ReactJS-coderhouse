import "./Item.css"
import { Link } from "react-router-dom"

const Item = ( {id, img, nombre, category, precio}) => {
    return(
        <div>
            <img  src={img} alt={nombre} style={{ width: 300}}/>
            <h1 className="nombreProducto">{nombre}</h1>
            <h3>{category}</h3>
            <p>precio: ${precio}</p>
            <Link  to={`/detail/${id}`}  className="btn btn-dark">Ver mas</Link> 
        </div>
    )
}

export default Item