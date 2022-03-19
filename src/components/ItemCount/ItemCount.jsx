import { useState } from 'react';
 
function ItemCount ( { stock, initial, onAdd } ){ 
    const [ count, setCount ] = useState(initial) 
 
    function handleIncrease() { 
        if(count < stock){ 
            setCount(count + 1) 
        } 
    } 
 
    function handreDecrease() { 
        if(count > initial){ 
            setCount(count - 1) 
        } 
    } 
 
    const add = () => { 
        console.log(count) 
    } 
 
 
  return ( 
    <> 
        <div className='inputContainer'> 
            <div className='buyInput'> 
                <div> 
                    <button className='btnv' onClick={handreDecrease}>-</button> 
                    <label>{count}</label> 
                    <button className='btnv' onClick={handleIncrease}>+</button> 
                </div> 
                <button className='btnf' onClick={add}><i className="fa-solid fa-cart-arrow-down"></i></button> 
            </div> 
        </div> 
    </> 
  ) 
} 
 
export default ItemCount;