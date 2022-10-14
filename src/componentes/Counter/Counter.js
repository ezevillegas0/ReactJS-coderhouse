import { useState } from 'react'
import "./Counter.css"

let stock = 10;

const Counter = ({stock = 0, initial = 1, onAdd}) => {
    
    const [quantity, setQuantity] = useState(initial)

    //Acciones del contador
    const sumar = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    } 

    const restar = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    /*const onAdd = () => {
        console.log(contador)
    }*/

    //return
    return (
        <div>
            <div className='ContenedorContador'>
              <button className='button' onClick={restar}>-</button>
              <h2 className='contador'>{quantity}</h2>
              <button className='button' onClick={sumar}>+</button>
            </div>

           <div>
           <button className=" btn btn-dark Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
           </div>
          
        </div>
    )
}

export default Counter 


