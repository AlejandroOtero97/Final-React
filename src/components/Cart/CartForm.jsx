import { useCartContext } from './../../context/CartContext';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


function CartForm() {
    const { cartList, sumaTotal, emptyCart } = useCartContext();
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

      swal("Orden de Compra", resultString, "success")
      emptyCart();
  }

  return (

    <div className='space'>
        <form className='container-fluid' onSubmit={handleSubmit(onSubmit)}>
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
          <div className='flex zindex'>
            <button type="submit" class="slide">
              <div>¡Generar Orden!</div>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </form>
    </div>

  )
}

export default CartForm
