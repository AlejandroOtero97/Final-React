import Item from "../Item/Item"


function ItemList({ prods }) {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                {prods.map((prod) => 
                    <div className="col-md-3" key={prod.id}>
                        <Item key={prod.id} prod={prod} />
                    </div>
                )}
             </div>
        </div>
    )
}

export default ItemList