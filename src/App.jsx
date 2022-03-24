import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './Container/ItemListContainer.jsx';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css'

function App() {

  return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />     
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting="Welcome to the React Shop" />} />
                        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
                        <Route path='/Cart' element={<Cart />}/>
                        <Route path='/*' element={<Navigate to='/' />} />
                    </Routes>
                </div>
            </BrowserRouter>
  );
}

export default App;