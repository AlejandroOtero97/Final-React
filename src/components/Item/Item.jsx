import { Link } from "react-router-dom"

function Item({prod}) {
  const {imgUrl, id, name, desc, price} = prod;

  return (
    <>
     
        <div className="card">
          
           <img className="card-img-top" src={imgUrl} alt="Card" />
           <div className="card-body card-block">
                <h5 className="card-title">{id}-{name}</h5>
                <Link to={`detalle/${id}`}>
                  <p className="card-text">{desc}</p>
                </Link>
                <p href="#" className="btn btn-primary">Valor:{price}</p>
           </div>
        </div>
       
    </>
  )
}

export default Item;