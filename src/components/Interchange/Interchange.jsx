import { useState } from "react";
import { Link } from "react-router-dom";

const ButtonCount= ({handleInput})=> {
    return (
        <button 
            className="button-buy" 
            onClick={handleInput}>
                Buy!
        </button>
    )
}

const InputCount= ()=> {
    return (
        <Link to='/cart' >
            <button 
                className="button-finish" 
                onClick={()=>console.log("cart") }>
                    To Cart!
            </button>
        </Link>
    )
}

const InterSwap = () => {
    const [input, setInput ] = useState('button')
    const handleInput=()=>{
        setInput('input')
    }
    return (
        <div> 
            {input === 'button' 
                ? 
                <ButtonCount handleInput={handleInput} />
                : 
                <InputCount />
            }
        </div>
    )
}

export default InterSwap
