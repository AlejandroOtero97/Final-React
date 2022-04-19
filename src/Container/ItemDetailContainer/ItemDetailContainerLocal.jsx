import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/gFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"


function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    
    useEffect(()=>{

        getFetch
        .then(prod => prod.find(item => item.id === productId))
        .then(prod => setProducto(prod))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))


    }, )
    
    return (
        <>
                {loading ?
                    <h2><i className="mt-5 fa-regular fa-hourglass"></i>Loading your game's details...</h2>
                    :
                    <div>
                        <ItemDetail 
                            prod={producto} 
                            key={producto.id} />
                    </div>                            
            }
        </>
    )
}

export default ItemDetailContainer