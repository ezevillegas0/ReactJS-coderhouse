import "./Item.css"
import { Link } from "react-router-dom"

const Item = ( {id, img, nombre, category, precio}) => {
    return(
        <div className="cardContenedora">
         
            <h2 className="tituloProducto"> {nombre} </h2>
       
            <img src={img} alt={nombre} className="imagenProducto"/>
         
            <h5 className="precioProducto">Precio: ${precio}</h5>
         
            <Link  className="btn btn-dark" to={`/detail/${id}`}>Ver detalle</Link>
           
        </div>
    )
}

export default Item


/* 
<div className="contenedorProducto">
<img  src={img} alt={nombre} style={{ width: 300}}/>
<h1 className="nombreProducto">{nombre}</h1>
<h3>{category}</h3>
<p>precio: ${precio}</p>
<Link  to={`/detail/${id}`}  className="btn btn-dark">Ver mas</Link> 
</div> */