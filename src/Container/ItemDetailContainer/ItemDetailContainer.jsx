import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import './itemDetailContainer.css';


function ItemDetailContainer() {
    const [product, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    
    useEffect(()=>{

        async function getById() {

            try {
              const db = getFirestore();
              const item = doc(db, 'item' , productId);
              const response = await getDoc(item)
              
              setProducto( { id: response.id, ...response.data()} );
              setLoading(false);
            } catch (error) {
            }
    
          }
          getById();

    }, [productId])


    return (
        <>
                {loading ?
                    <h2><i className="mt-5 fa-regular fa-hourglass"></i>Loading your game's details...</h2>
                    :
                    <div>
                        <ItemDetail 
                            prod={product} 
                            key={product.id} />
                    </div>                            
            }
        </>
    )
}

export default ItemDetailContainer