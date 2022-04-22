import { useState } from "react";
import { Link } from "react-router-dom";
import './interchange.css';

const ButtonCount= ({handleInput})=> {
    return (
        <button className="interchange__button-buy" onClick={handleInput}> Buy! </button>
    )
}

const InputCount= ()=> {
    return (
        <Link to='/cart' >
            <button className="interchange__button-finish"> To Cart! </button>
        </Link>
    )
}

const InterSwap = () => {
    const [input, setInput ] = useState('button')
    const handleInput=()=>{
        setInput('input')
    }
    return (
        <> 
            {input === 'button' 
                ? 
                <ButtonCount handleInput={handleInput} />
                : 
                <InputCount />
            }
        </>
    )
}

export default InterSwap
