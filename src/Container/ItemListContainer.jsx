import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/gFetch';

function ItemListContainer({ saludo }){

    const [bool, setBool] = useState(true)
    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch 
        .then(resp => setProds(resp))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
        }, [])

    console.log(prods)
    

    return(
        <>

            <div className="text-center">
                <div>{saludo}</div>
                {loading ? <h2>Cargando...</h2> 
                : 
                <ul>{ prods.map((prod) => <li key={prod.id}>
                    {prod.name}
                    <img></img>
                    </li>
                    )}
                </ul>}
                
                <button onClick={()=> setBool(!bool)}>click</button>
            </div>
    
        </>
    )
}


export default ItemListContainer;























/* 
import { useState, useEffect } from 'react'

function ItemListContainer ({ saludo }) {
    const [ count, setCount ] = useState(0)
    const [ bool, setBool ] = useState ( true )


    useEffect(()=>{
        console.log("useEffect cada vez que se renderize el componente")
        return () => {
            console.log("efecto de limpieza")
        }
    })

    useEffect(()=>{
        console.log("llamada a api, o tarea sincronica pesada - 2 - una sola vez despues del primer montado")
    }, []) //array vacio para que sea solo llamado una vez

    useEffect(()=>{
        console.log("solo se dispara si cambia bool")
    }, [bool, saludo])


    const handleCount = () => {
        setCount( count + 1 )
        console.log(count)
    }

    const handleBool = () => {
        setBool(!bool)
    }

    console.log("montado del componente")


    return(
        <>
            <div className='text-center'>
                <div>{count}</div>
                <label>{Date(count)}</label>
                <button onClick={handleBool}>Buleano</button>
                <button onClick={handleCount}>click</button>
            </div>
        </>
        
    )
}
*/