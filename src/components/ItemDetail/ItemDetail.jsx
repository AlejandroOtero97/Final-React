import ItemCount from "../ItemCount/ItemCount";
import { Row, Col } from 'react-bootstrap';
import { useCartContext } from './../../context/CartContext';



function ItemDetail({producto}) {
  const {imgSource, name, descExtra, price, stock} = producto;

  const {addToCart, cartList} = useCartContext()

  const onAdd=(count)=>{
    console.log(count);
    addToCart({ ...producto, cantidad: count })
  }

  console.log(cartList);
  return (

    <div className="container mt-5 animate__animated animate__fadeInLeftBig">
      <Row>
        <Col sm={8}>
          <img className="imgSource" src={imgSource} alt="imagen" />
        </Col>
        <Col sm={4} className="column-2 text-center">
          <h2 className="mb-3 mt-2"> {name} </h2>
          <h5 className="mb-3"> {descExtra} </h5>
          <h3 className="price mb-3"> ${price} </h3>
          <div>
            <div className="flex mb-2">
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </Col>
      </Row>                       
    </div>

  )
}

export default ItemDetail