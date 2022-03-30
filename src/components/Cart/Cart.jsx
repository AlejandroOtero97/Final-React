import { useCartContext } from './../../context/CartContext';
import { Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

function Cart() {

  const { cartList, emptyCart } = useCartContext();
  
  return (
    <>
      <div className='tables'>
        <table>
          <thead>
            <tr>
              <th>Identificacion</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
          {cartList.map(prod => 
            <tr key={uuidv4()}>
              <td>{prod.id} </td>
              <td>{prod.name} </td>
              <td>Games</td>
              <td>{prod.desc} </td>
              <td>{prod.cantidad} </td>
              <td>{prod.price} </td>
              <td>{prod.price * prod.cantidad} </td>
              <td><Button>Quitar Item</Button></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
        
      <Button onClick={emptyCart} className="button-card">Empty Cart</Button>
    </>
  )
}

export default Cart
