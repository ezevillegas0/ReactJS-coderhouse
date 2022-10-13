import Item from "../Item/Item"

const ItemList = ({products}) => {

    return (
        <div>
            {products.map(prod => <Item key={prod.id} img={prod.img} nombre={prod.nombre} category={prod.category} precio={prod.precio}/>)}
           
        </div>
    )
}

export default ItemList