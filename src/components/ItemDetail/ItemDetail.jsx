import ItemCount from "../ItemCount/ItemCount"
import { Row, Col } from 'react-bootstrap'

function ItemDetail({producto}) {

  const {imgSource, name, desc, descExtra, price, stock} = producto;

  return (

    <div className="container mt-5">
      <Row>
        <Col sm={8}>
          <img className="imgSource" src={imgSource} alt="imagen" />
        </Col>
        <Col sm={4} className="column-2 text-center">
          <h2 className="mb-5"> {name} </h2>
          <h5 className="mb-5"> {desc} </h5>
          <h5 className="mb-5"> {descExtra} </h5>
          <h3 className="mb-5"> ${price} </h3>
          <div>
            <div className="flex">
              <ItemCount stock={stock} initial={1} />
            </div>
          </div>
        </Col>
      </Row>                       
    </div>

  )
}

export default ItemDetail