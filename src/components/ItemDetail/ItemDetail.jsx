import { Row, Col } from 'react-bootstrap';
import { useCartContext } from './../../context/CartContext';
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({prod}) {
  const {imgSource, name, desc, price } = prod;
  const [ counter, setCounter ] = useState(0)
  const { addToCart } = useCartContext()

  const onAdd=(count)=>{
    setCounter(count)
    addToCart({ ...prod, cantidad: count })
  }
  return (

    <div className="container mt-5 animate__animated animate__fadeInLeftBig">
      <Row>
        <Col sm={8}>
          <img className="imgSource" src={imgSource} alt="imagen" />
        </Col>
        <Col sm={4} className="column-2 text-center">
          <h2 className="mb-3 mt-2"> {name} </h2>
          <h5 className="mb-3"> {desc} </h5>
          <h3 className="price mb-3"> ${price} </h3>
          <div>
          {
              counter === 0
              
              ? 

              <ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>

              : 

              <div className="mt-4">
                  <Link to='/'>
                      <button className="btn btn-dark mb-3">Continue Browsing</button>
                  </Link>
                  <Link to='/cart'>
                      <button className="btn btn-dark">Finish Shopping</button>
                  </Link>
              </div>
          }
          </div>
        </Col>
      </Row>                       
    </div>

  )
}

export default ItemDetail