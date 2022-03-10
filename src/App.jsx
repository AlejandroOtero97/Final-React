import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/NavBar.css'
import './Container/ItemList.css'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './Container/ItemListContainer.jsx';


function App() {

  return (

    <>
      <NavBar />
      <ItemListContainer greeting="Welcome to the React Shop"/>
    </>

  );
}

export default App;