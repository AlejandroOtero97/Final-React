import { useEffect, useState } from "react"
//import { getFetch } from '../helpers/gFetch'
import { useParams } from "react-router-dom"
import ItemList from "../components/ItemList/ItemList"

import { 
    collection,    
    getDocs, 
    getFirestore,        
    query, 
    where 
} from 'firebase/firestore'

function ItemListContainer(){
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])
    const { id } = useParams()
  
    useEffect(()=> {
        console.log(id)
        const db = getFirestore()    

        const queryCollectionFinal =  !id 
                            ? 
                                collection(db, 'item' )
                            :  
                                query( collection(db, 'item' ), 
                                    where('categoria','==', id)                                  
                                )                             

        getDocs(queryCollectionFinal)
        .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))   
        
    }, [id])   

    function Greeting(props) {
        return(
            <h1>{props.greeting}</h1>
        )
    }

    return(
        <> 
            <div className="animate__animated animate__fadeInDown">
                <Greeting greeting="Welcome to the React Shop"/>
                <h5 className="title-second">Browse through our game catalog</h5>
            </div>
                {loading ? 
                    <h2><i className="fa-regular fa-hourglass"></i>Loading...</h2>
                    :
                    <div>
                        
                        <ItemList prods={prods} /> 
                    </div>
                                          
            }

        </>
    )
}

export default ItemListContainer;
