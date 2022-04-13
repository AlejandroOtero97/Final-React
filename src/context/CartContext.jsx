import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])



    
    function addToCart(item){
        
        if(isInCart(item.id)){
           
           const prod = cartList.find((p) => p.id === item.id)
           const { cantidad } = prod
           
           prod.cantidad = item.cantidad + cantidad
           const newCart = [ ...cartList ]
           setCartList(newCart)

       } else {

           setCartList ( [...cartList, item ])
       }
    }

    const isInCart = (id) => {
        const game = cartList.find(element => element.id === id)
        if (game !== undefined) {
            return true;
        }else {
            return false;
        }
    }






    const sumaTotal = () => {
        return cartList.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0)
    }
    
    const emptyCart= () =>{
        setCartList([])
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
            cantidad,
            sumaTotal
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider


