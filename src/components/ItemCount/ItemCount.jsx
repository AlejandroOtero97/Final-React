import { useState } from 'react';
import Interchange from '../Interchange/Interchange';
 
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
 
    const agregar = () => {
        onAdd( count )
    }
 
  return ( 
    <> 
        <div className='inputContainer'> 
            <div className='buyInput'> 
                <div> 
                    <button className='btnv' onClick={handleDecrease}>-</button> 
                    <label>{count}</label> 
                    <button className='btnv' onClick={handleIncrease}>+</button>
                    
                </div>
                <button onClick={ agregar }>Add to Cart</button>
                <Interchange />
            </div>
            
        </div> 
    </> 
  ) 
} 
 
export default ItemCount;