import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/gFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"



function ItemDetailContianer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    
    const { detalleId } = useParams()
    
    
    useEffect(()=>{
        getFetch
        .then(prod => prod.find(item => item.id === detalleId))
        .then(prod => setProducto(prod))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
    },)
    
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

export default ItemDetailContianer