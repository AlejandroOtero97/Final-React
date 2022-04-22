import { useCartContext } from './../../context/CartContext';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function CartDetail() {
    const { cartList, deleteItem } = useCartContext();

    return (
      <>
        <div className='cart__tables'>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
            {cartList.map(prod => 
              <tr key={uuidv4()}>
                <td>
                  <Link to={`/details/${prod.id}`}>
                    <img src={prod.imgSource} alt="foto" className='cart__img-cart'/> 
                  </Link>
                </td>
                <td>{prod.name}</td>
                <td>{prod.category}</td>
                <td>{prod.cantidad}</td>
                <td>${prod.price}</td>
                <td>${prod.price * prod.cantidad} </td>
                <td><button className='simple' onClick={()=>deleteItem(prod.id)}>Delete</button></td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
  )
}

export default CartDetail
