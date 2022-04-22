import { useState } from 'react';


function ItemCount ( { stock, initial, onAdd } ){ 
    const [ count, setCount ] = useState(initial) 
 
    function handleIncrease() { 
        if(count < stock){ 
            setCount(count + 1) 
        } 
    } 
 
    function handleDecrease() { 
        if(count > initial){ 
            setCount(count - 1) 
        } 
    } 
 
    const add = () => {
        onAdd( count )
    }

  return ( 
    <> 
        <div> 
            <div> 
                <button className='btn btn-dark m-3' onClick={handleDecrease}>-</button> 
                <label>{count}</label> 
                <button className='btn btn-dark m-3' onClick={handleIncrease}>+</button>
                
            </div>
            <button onClick={ add } className="btn btn-dark m-3">ADD TO CART</button>
        </div>
    </> 
  ) 
} 
 
export default ItemCount;