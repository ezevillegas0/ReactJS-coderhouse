import "./Item.css"
import { Link } from "react-router-dom"

const Item = ( {id, img, name, category, price}) => {
    return(
        <div className="cardContenedora">
                <div className="contenedorImagen">
                <img src={img} alt={name} className="imagenProducto"/>
                </div>

            <h4 className="tituloProducto"> {name} </h4>
         
            <h5 className="priceProducto">price: ${price}</h5>
         
            <Link  className="btn btn-info" to={`/detail/${id}`}>Ver detalle</Link>
           
        </div>
    )
}

export default Item

