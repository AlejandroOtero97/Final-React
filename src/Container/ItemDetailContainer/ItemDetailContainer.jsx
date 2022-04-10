import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import { getFetch } from "../../helpers/gFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore';



function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    
    //const { detalleId } = useParams()
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

        //getFetch
        //.then(prod => prod.find(item => item.id === detalleId))
        //.then(prod => setProducto(prod))
        //.catch((err) => console.log(err))
        //.finally(()=> setLoading(false))


    }, [productId])
    
    return (
        <>
                {loading ?
                    <h2><i className="mt-5 fa-regular fa-hourglass"></i>Loading your game's details...</h2>
                    :
                    <div>
                        <ItemDetail producto={producto} />
                    </div>                            
            }
        </>
    )
}

export default ItemDetailContainer