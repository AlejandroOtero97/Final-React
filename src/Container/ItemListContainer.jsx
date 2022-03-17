import Item from "../components/ItemList/Item";


function ItemListContainer(){

    function Greeting(props) {
        return(
            <h1>{props.greeting}</h1>
        )
    }

    return(
        <>
            <Greeting greeting="Welcome to the React Shop"/>
            <Item />
        </>
    )
}

export default ItemListContainer;
