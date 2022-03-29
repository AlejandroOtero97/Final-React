import { useCartContext } from './../../context/CartContext';
import { Card, Button } from 'react-bootstrap'


function Cart() {

  const { cartList, emptyCart } = useCartContext();
  return (
    <>
      {cartList.map(prod => 
        <div className="col-md-3" key={prod.id}>
          <Card className="card animate__animated animate__fadeInUp m-4">
            <div className="overflow">
              <Card.Img className="card-img-top" src={prod.imgSource} />
            </div>
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
                <Card.Text className="card-body">
                  {prod.desc}
                 
                </Card.Text>
                <Card.Text>
                  Price: ${prod.price * prod.cantidad}
                </Card.Text>
            </Card.Body>
            Quantity: {prod.cantidad}
          </Card>
        </div>
        )}
        <Button onClick={emptyCart} className="button-card">Empty Cart</Button>
    </>
  )
}

export default Cart
