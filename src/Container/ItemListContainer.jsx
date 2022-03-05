import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/gFetch';

function ItemListContainer({ saludo }){
    const [bool, setBool] = useState(true)
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])

    useEffect(()=>{
        getFetch 
        .then(resp => setProds(resp))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
        }, [])
    

    return(
        <>
            <div className="container">
                {loading ? <h2><i className="fa-regular fa-hourglass"></i>Loading...</h2>
                :
                prods.map((prod)=> 
                                    <div className="card">
                                        <img className="card-img-top" src={prod.imgUrl} alt="Card" />
                                        <div className="card-body">
                                        <h5 className="card-title">{prod.id}-{prod.name}</h5>
                                        <p className="card-text">{prod.desc}</p>
                                        <p href="#" className="btn btn-primary">¡Buy!</p>
                                        </div>
                                    </div>
                                
                )} 
            </div>
            
            <button onClick={()=> setBool(!bool)}>click</button>
        </>
    )
}


export default ItemListContainer;
