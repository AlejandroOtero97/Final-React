import { useCartContext } from './../../context/CartContext';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';


function CartForm() {
    const { cartList, sumaTotal, emptyCart } = useCartContext();
    const {formState: { errors }, register, handleSubmit } = useForm();
  
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

      
      let resultString = "Name: " + orden.buyer.name + `\n` +
                         "Email: " + orden.buyer.email + `\n` +
                         "Phone: " + orden.buyer.phone + `\n`  
      resultString += "Date: " + orden.date.toLocaleDateString("es-ES") + `\n`
      resultString += "Order ID: " + uuidv4() + `\n`

      orden.items.forEach(element => {
        resultString += `Product: ${element.nombre}, Price: ${element.precio}\n` 
      });

      resultString += "Total Import: $" + orden.total + `\n`;

      swal("Purchase Order", resultString, "success")
      emptyCart();
  }

  return (

    <div className='space'>
        <form className='container-fluid' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder='Alejandro Otero' name='name' {...register('name', { required: { value:true, message: "Insert Your Full Name"} })}/>
            <p className='form-error'>{errors?.name?.message}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" placeholder='Example@gmail.com' name='email' {...register('email', { required: { value:true, message: "Insert Your Email with @"} })}/>
            <p className='form-error'>{errors?.email?.message}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" placeholder='11-4058-8867' name='phone' 
            {...register('phone', { required: { value:true, message: "Insert Your Phone number with a min of 10 digits"}, minLength: { value: 10, message: "At least 10 digits"} })}/>
            <p className='form-error'>{errors?.phone?.message}</p>
          </div>
          <div className='flex zindex'>
            <button type="submit" class="slide" >
              <div>¡Generate Order!</div>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </form>
    </div>

  )
}

export default CartForm
