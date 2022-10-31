import { useState } from 'react'
import "./Counter.css"

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

    //return
    return (
        <div>
            <div className='ContenedorContador'>
              <button className='button' onClick={restar}>-</button>
              <h2 className='contador'>{quantity}</h2>
              <button className='button' onClick={sumar}>+</button>
            </div>

           <div>
           <button className="btn btn-info Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
           </div>
          
        </div>
    )
}

export default Counter 


