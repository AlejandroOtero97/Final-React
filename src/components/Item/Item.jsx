import { Link } from "react-router-dom"
import { Card, Button } from 'react-bootstrap';


function Item({prod}) {
  const {imgUrl, id, name, desc} = prod;

  return (
        <div className="container d-flex justify-content-center">
            <Card className="card" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Title>{id}-{name}</Card.Title>
                  <Card.Text className="card-body">
                    {desc}
                  </Card.Text>
                  <Link to={`detalle/${id}`} className="link">
                    <Button className="button-card">More Info</Button>
                  </Link>
              </Card.Body>
            </Card>
        </div>
  )
}

export default Item;