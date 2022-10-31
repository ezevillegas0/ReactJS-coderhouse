import './ItemDetailContainer.css'
import { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/firebase/firestore/products'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        document.title = loading ? 'Cargando' : `Detalle ${product.name} `
    })

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {

            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])


    /* const getProductsWithId = () => getProducts(productId)
    const { data: product, error, loading } = useAsync(getProductsWithId, [productId]) */

    

    if(loading) {
        return <h1 className="tituloPrincipal">Cargando...</h1>
    }

   /*  if(error) {
        return <h1>hubo un error</h1>
    } */

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
            {/* <ItemDetail  product={product} /> */}
        </div>
    )
}

export default ItemDetailContainer