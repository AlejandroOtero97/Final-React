import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({producto}) {

  const {imgUrl, id, name, desc, price, stock} = producto;

  return (
    <div>
      <div className="card">
          <img className="card-img-top" src={imgUrl} alt="Card" />
          <div className="card-body card-block">
              <h5 className="card-title">{id}-{name}</h5>
              <p className="card-text">{desc}</p>
              <p href="#" className="btn btn-primary">Valor:{price}</p>
          </div>
          <ItemCount stock={stock} initial={1} />
       </div>
    </div>
  )
}

export default ItemDetail