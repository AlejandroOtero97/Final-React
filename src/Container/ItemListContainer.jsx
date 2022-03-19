import { useEffect, useState } from "react";
import { getFetch } from '../helpers/gFetch';
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";



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
        <>
            <Greeting greeting="Welcome to the React Shop"/>
            <div className="container">
                {loading ? 
                    <h2><i className="fa-regular fa-hourglass"></i>Loading...</h2>
                    :
                    <ItemList prods={prods} />        
            }
            </div>
        </>
    )
}

export default ItemListContainer;
