import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetchOne } from "../../helpers/gFetch"


function ItemDetailContianer() {
    const [producto, setProducto] = useState({})

    const { detalleId } = useParams() 
    
    useEffect(()=>{
        getFetchOne
        .then(prod => setProducto(prod))
        .catch(err => console.log(err))

    }, [])
    
    return (
        <div>
            <ItemDetail producto={producto} />      
        </div>
    )
}

export default ItemDetailContianer