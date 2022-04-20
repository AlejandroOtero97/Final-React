import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'
import './item.css';

function Item({prod}) {


  return (
    <>
      <Card className="card animate__animated animate__fadeInUp">
            <div className="overflow">
              <Card.Img className="card-img-top" src={prod.imgSource} />
            </div>
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
                <Card.Text className="card-body">
                  {prod.desc}
                </Card.Text>
                <Link to={`/details/${prod.id}`}>
                  <button className="button-card">
                    More Info
                  </button>
                </Link>
            </Card.Body>
          </Card>
          
    </>
        
  )
}

export default Item;