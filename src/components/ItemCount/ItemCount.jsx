import { useState } from 'react';
import Interchange from '../Interchange/Interchange';
 
function ItemCount ( { stock, initial } ){ 
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
 
 
  return ( 
    <> 
        <div className='inputContainer'> 
            <div className='buyInput'> 
                <div> 
                    <button className='btnv' onClick={handleDecrease}>-</button> 
                    <label>{count}</label> 
                    <button className='btnv' onClick={handleIncrease}>+</button> 
                </div> 
                <Interchange />
            </div> 
        </div> 
    </> 
  ) 
} 
 
export default ItemCount;