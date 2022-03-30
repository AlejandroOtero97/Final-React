import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './container/ItemListContainer.jsx';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css'
import CartContextProvider from './context/CartContext'

function App() {
    console.log(CartContextProvider);
    return (
                <BrowserRouter>
                    <CartContextProvider >
                        <div className="App">
                            <NavBar />
                            <Routes>
                                <Route path="/" element={<ItemListContainer greeting="Welcome to the React Shop" />} />
                                <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
                                <Route path="/categoria/:id" element={<ItemListContainer greeting="Welcome to the React Shop" />} />                        
                                <Route path='/Cart' element={<Cart />}/>
                                <Route path='/*' element={<Navigate to='/' />} />
                            </Routes>
                        </div>
                    </CartContextProvider>
                </BrowserRouter>
    );
}

export default App;