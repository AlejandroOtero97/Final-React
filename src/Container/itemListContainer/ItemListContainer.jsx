import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import './itemListContainer.css';

function ItemListContainer(){
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])
    const { category } = useParams();


    useEffect(() => {
        
        const db = getFirestore();
        const obtainProducts = category
        ? query(collection(db, "item"), where("category", "==", category)): collection(db, "item");

        getDocs(obtainProducts)
            .then((data) =>setProds(data.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [category]);



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
                {loading 
                    ? 
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
