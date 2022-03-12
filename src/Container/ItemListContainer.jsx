import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/gFetch';
import ItemCount from './ItemCount';

function ItemListContainer(){
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])

    useEffect(()=>{
        getFetch 
        .then(resp => setProds(resp))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
        }, [])

    function Greeting(props) {
        return(
            <h1>{props.greeting}</h1>
        )
    }

    return(
        <>
            <Greeting greeting="Welcome to the React Shop"/>
            <div className="container">
                {loading ? <h2><i className="fa-regular fa-hourglass"></i>Loading...</h2>
                :
                prods.map((prod)=>

                    <div className="card">
                        <img className="card-img-top" src={prod.imgUrl} alt="Card" />
                        <div className="card-body card-block">
                            <h5 className="card-title">{prod.id}-{prod.name}</h5>
                            <p className="card-text">{prod.desc}</p>
                            <p href="#" className="btn btn-primary">Valor:{prod.price}</p>
                            <ItemCount stock={prod.stock} initial={1} />
                        </div>
                    </div>
                                
                )} 
            </div>
        </>
    )
}


export default ItemListContainer;
