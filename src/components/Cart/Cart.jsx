import { useCartContext } from './../../context/CartContext';
import { Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import './cart.css';


function Cart() {

  const { cartList, emptyCart, deleteItem, sumaTotal } = useCartContext();
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    generarOrden(data)
  }

  function generarOrden(data) {
      let orden = {}
      orden.buyer = data;
      orden.total = sumaTotal();
      orden.date = new Date();


      orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.name
        const precio = cartItem.price * cartItem.cantidad

        return {id, nombre, precio}
      })
    
      let resultString = "Nombre: " + orden.buyer.name + `\n` +
                         "Email: " + orden.buyer.email + `\n` +
                         "Telefono: " + orden.buyer.phone + `\n`  
      resultString += "Fecha: " + orden.date.toLocaleDateString("es-ES") + `\n`

      orden.items.forEach(element => {
        resultString += `Producto: ${element.nombre}, Precio: ${element.precio}\n` 
      });

      resultString += "Importe Total: $" + orden.total + `\n`;

      alert(resultString)  
  }


  return (
    <>
      <div className='cart__tables'>
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
              <td><img src={prod.imgSource} alt="foto" className='cart__img-cart'/> </td>
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
        <h4 className='cart__cart-orden space'> Total de la compra: ${sumaTotal()} </h4>
        <Button onClick={emptyCart} className="button-card space">Empty Cart</Button>

        <form className='container-fluid bg-dark' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder='Alejandro Otero' name='name' {...register('name', { required: true })}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder='Example@gmail.com' name='email' {...register('email', { required: true })}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" placeholder='11-4058-8867' name='phone' {...register('phone', { required: true })}/>
          </div>
          <div className='flex'>
            <button type="submit" className="button-card">Generar Orden</button>
          </div>
          
        </form>
      </div>
      
    </>
  )
}

export default Cart
