import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{
        if (!isInCart(item.id)) {
            setCartList( [ ...cartList, item ] )
        } else {
            alert("ya esta en tu pedido");
        }
    }
    
    const emptyCart= () =>{
        setCartList([])
    }

    const isInCart = (id) => {
        const game = cartList.find(element => element.id === id)
        if (game !== undefined) {
            return true;
        }else {
            return false;
        }
    }

    const deleteItem = (id) => {
        const aux = cartList.filter((item)=> item.id !== id)
        setCartList(aux);
    }

    const cantidad = () => {
        return cartList.reduce((acum, item) => acum += item.cantidad, 0)
    } 

    console.log(cartList);

    return (
        <CartContext.Provider value={{ 
            cartList,
            addToCart,
            deleteItem,
            emptyCart,
            cantidad
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider


