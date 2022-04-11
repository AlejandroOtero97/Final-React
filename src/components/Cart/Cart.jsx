import { useCartContext } from './../../context/CartContext';
import { Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

function Cart() {

  const { cartList, emptyCart, deleteItem, sumaTotal } = useCartContext();
  
  function generarOrden(e) {
    e.preventDefault();

      let orden = {}
      
      orden.buyer = {name: "ale", email:"loco@gmail.com", tel: "140588867"};

      orden.total = sumaTotal();

      orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.name
        const precio = cartItem.price * cartItem.cantidad

        return {id, nombre, precio}
      })
    
    
      console.log(orden);
  }


  return (
    <>
      <div className='tables'>
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
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
              <td><img src={prod.imgSource} alt="foto" className='img-cart'/> </td>
              <td>{prod.name} </td>
              <td>Games</td>
              <td>{prod.desc} </td>
              <td>{prod.cantidad} </td>
              <td>${prod.price} </td>
              <td>${prod.price * prod.cantidad} </td>
              <td><Button className='button-card' onClick={()=>deleteItem(prod.id)}>Quitar Item</Button></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
        
      <div>
        <h4 className='cart-orden space'> Total de la compra: ${sumaTotal()} </h4>
        <Button onClick={emptyCart} className="button-card space">Empty Cart</Button>
        <Button onClick={generarOrden} className="button-card space">Generar Orden</Button>
      </div>
      
    </>
  )
}

export default Cart
