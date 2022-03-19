import { Link } from "react-router-dom"

function Item({prod}) {


  return (
      <Link to={`detalle/${prod.id}`}>
        <div className="card">
           <img className="card-img-top" src={prod.imgUrl} alt="Card" />
           <div className="card-body card-block">
               <h5 className="card-title">{prod.id}-{prod.name}</h5>
               <p className="card-text">{prod.desc}</p>
               <p href="#" className="btn btn-primary">Valor:{prod.price}</p>
           </div>
        </div>
      </Link>
  )
}

export default Item;