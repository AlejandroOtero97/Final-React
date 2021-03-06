import { useCartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';
import CartForm from './CartForm';
import CartDetail from './CartDetail';
import './cart.css';

function Cart() {
  const { emptyCart, cartList, addTotal } = useCartContext();

  return (
    <>
      {cartList.length >= 1 ? (
        <>
          <CartDetail />
          <CartForm />
          <div>
            <h4 className='cart__cart-orden space'> Total Cost: ${addTotal()} </h4>
            <button onClick={emptyCart} className="slide spacing">
                <div className=''>Empty Cart</div>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='space animate__animated animate__shakeX'>
            <h1>¡Cart is Empty!</h1>
            <h4>Browse our catalog</h4>
          </div>
          <Link to="/">
            <div className='zindex'>
              <button type="button" className="slide">
                <div>Start Shopping!</div>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>     
          </Link>
        </>
        
      )}
    </>
  )
}

export default Cart
