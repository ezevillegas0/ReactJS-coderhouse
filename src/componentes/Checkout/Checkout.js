import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext} from '../../notification/NotificationService'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const navigate = useNavigate()

    const createOrder = async () => {

        setLoading(true)
        
        try{
            const objOrder = {
                buyer: {
                    nombre: "Ezequiel Villegas",
                    telefono: "11652075573",
                    mail: "ezevillegas0@gmai;.com"
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)

            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, "products")
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
    
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock : stockDb - prodQuantity })
                }else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() =>{
                    navigate("/")
                }, 3000)

                setNotification("success",`El id de su orden es: ${orderAdded.id}`)
            }else{
                setNotification("error","hay productos que estan fuera de stock")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    
    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }


    return(
        <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            {/* <Form />  componente de un formulario*/}
            <button onClick={createOrder}>Generar orden</button>
           
        </div>
    )
}

export default Checkout