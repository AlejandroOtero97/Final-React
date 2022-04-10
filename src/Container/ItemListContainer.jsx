import { useEffect, useState } from "react"
import { getFetch } from '../helpers/gFetch'
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
    const { id, idCategory } = useParams()
  
    useEffect(()=> {
    
        async function getAll() { 
       
            try { 
                const db = getFirestore() 
                const queryCollection =  collection(db, 'item') 
     
                const filterQuery = idCategory ? query(queryCollection, where('category', '==', idCategory)) : queryCollection 
     
                const response = await getDocs(filterQuery) 
                setProds(response.docs.map( prod => ({ id: prod.id, ...prod.data() }) )); 
                setLoading(false); 
     
            } catch (error) { 
                 
            } 
                     
            } 
     
            getAll(); 
       
              //getFetch  
              //.then(resp => setProds(resp)) 
              //.catch((err) => console.log(err)) 
              //.finally(()=> setLoading(false)) 
     
              }, [id, idCategory]) 

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
