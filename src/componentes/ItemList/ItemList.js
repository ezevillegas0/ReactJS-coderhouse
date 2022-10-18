import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) => {

    return (
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} id={prod.id}img={prod.img} nombre={prod.nombre} category={prod.category} precio={prod.precio}/>)}
           
        </div>
    )
}

export default ItemList