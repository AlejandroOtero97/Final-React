import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import './itemListContainer.css';

function ItemListContainer(){
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])
  
    const { categoria } = useParams();


    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const obtenerProductos = categoria
        ? query(collection(db, "item"), where("category", "==", categoria))
        : collection(db, "item");

        getDocs(obtenerProductos)
        .then((data) =>
        setProds(data.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [categoria]);



    function Greeting(props) {
        return(
            <h1>{props.greeting}</h1>
        )
    }

    return(
        <> 
            <div className="animate__animated animate__fadeInDown">
                <Greeting greeting="Welcome to the React Shop"/>
                <h5 className="title-second">Browse through our catalog</h5>
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
