import { useCartContext } from './../../context/CartContext';
import { v4 as uuidv4 } from 'uuid';


function CartDetail() {
    const { cartList, deleteItem } = useCartContext();

    return (
      <>
        <div className='cart__tables'>
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
            {cartList.map(prod => 
              <tr key={uuidv4()}>
                <td><img src={prod.imgSource} alt="foto" className='cart__img-cart'/> </td>
                <td>{prod.name} </td>
                <td>{prod.category}</td>
                <td>{prod.cantidad} </td>
                <td>${prod.price} </td>
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
