import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/NavBar.css'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './Container/ItemListContainer.jsx';
import Greeting from './Container/ItemListContainer.js'


function App(greeting) {
  return (

    <>
      <NavBar />
      <Greeting />
      <ItemListContainer />
    </>

  );
}

export default App;