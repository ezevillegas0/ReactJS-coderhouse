import "./Item.css"

const Item = ( {img, nombre, category, precio}) => {
    return(
        <div>
            <img  src={img} alt={nombre} style={{ width: 300}}/>
            <h1 className="nombreProducto">{nombre}</h1>
            <h3>{category}</h3>
            <p>precio: ${precio}</p>
        </div>
    )
}

export default Item