import ItemCount from "../ItemCount/ItemCount"
import "../ItemDetail/ItemDetail.css"
import { Card, Button } from 'react-bootstrap';

function ItemDetail({producto}) {

  const {imgUrl, id, name, desc, price, stock} = producto;

  return (

        <div className="container">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Title>{id}-{name}</Card.Title>
                <Card.Text>
                  {desc}
                </Card.Text>
                <Button variant="primary">${price}</Button>
              </Card.Body>
            </Card>
          <ItemCount stock={stock} initial={1} />
        </div>

  )
}

export default ItemDetail