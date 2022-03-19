import { useEffect, useState } from "react";
import { getFetch } from '../helpers/gFetch';
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import ItemCount from "../components/ItemCount/ItemCount"


function ItemListContainer(){
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])
    const { id } = useParams()
  
      useEffect(()=>{
          getFetch 
          .then(resp => setProds(resp))
          .catch((err) => console.log(err))
          .finally(()=> setLoading(false))
          }, [id])

    function Greeting(props) {
        return(
            <h1>{props.greeting}</h1>
        )
    }

    return(
        <div className="container">
            <Greeting greeting="Welcome to the React Shop"/>
             {loading ? 
                <h2><i className="fa-regular fa-hourglass"></i>Loading...</h2>
                :
                prods.map((prod)=>
                    <ItemList prods={prods} />        
          )}
            
            <ItemCount stock={prods.stock} initial={1} />
        </div>
    )
}

export default ItemListContainer;
