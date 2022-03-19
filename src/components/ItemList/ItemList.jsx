import Item from "../Item/Item"


function ItemList({ prods }) {
    return (
        <>
            {prods.map((prod) => 
            <div className="col-md-4">
                <Item key={prod.id} prod={prod} />
            </div>
             )}
        </>
    )
}

export default ItemList