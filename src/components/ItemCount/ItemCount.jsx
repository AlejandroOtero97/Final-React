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
 
    const add = () => {
        onAdd( count )
    }
 
  return ( 
    <> 
        <div className='inputContainer'> 
            <div className='buyInput'> 
                <div> 
                    <button className='button-buy' onClick={handleDecrease}>-</button> 
                    <label>{count}</label> 
                    <button className='button-buy' onClick={handleIncrease}>+</button>
                    
                </div>
                <div className='buttons'>
                    <button onClick={ add } className="button-buy">Add</button>
                    <Interchange />
                </div>
                
            </div>
            
        </div> 
    </> 
  ) 
} 
 
export default ItemCount;