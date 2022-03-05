import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './Container/ItemListContainer';

function App() {
  return (

    <>
      <NavBar />
      <ItemListContainer saludo="Welcome to the React Shop" />
    </>

  );
}

export default App;