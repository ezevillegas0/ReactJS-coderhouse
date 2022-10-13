import { useState } from 'react'
import "./Counter.css"

let stock = 10;

const Counter = ({onAdd}) => {
    
    const [contador, setContador] = useState(0)

    //Acciones del contador
    const restar = () => {
        if(contador > 0) {
            setContador(contador - 1)
        }
    }
    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
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
              <h2 className='contador'>{contador}</h2>
              <button className='button' onClick={sumar}>+</button>
            </div>

           <div>
              <button className='button' onClick={onAdd}>Agregar al carrito</button>
           </div>
          
        </div>
    )
}

export default Counter 


