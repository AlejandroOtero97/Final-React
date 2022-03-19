import { Link } from "react-router-dom"
import { Card, Button } from 'react-bootstrap'


function Item({prod}) {
  const {imgSource, id, name, desc} = prod;

  return (

        <Card className="card" style={{ width: '18rem', height: '24rem', marginBottom: '15px' }}>
          <div className="overflow">
            <Card.Img className="card-img-top" src={imgSource} />
          </div>
          
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
  )
}

export default Item;