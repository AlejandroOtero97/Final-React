import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import ItemDetailContainerLocal from './Container/ItemDetailContainer/ItemDetailContainerLocal';

import ItemListContainer from './Container/ItemListContainer.jsx';
import ItemListContainerLocal from './Container/ItemListContainerLocal.jsx';

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

                                <Route path='/details/:productId' element={<ItemDetailContainerLocal />}/>
                                <Route path='/details/:productId' element={<ItemDetailContainer />}/>

                                
                                
                                
                                
                                <Route path="/" element={<ItemListContainer greeting="Welcome to the React Shop" />} />
                                <Route path='/category/parts' element={<ItemListContainerLocal greeting="Welcome to the React Shop" />} />
                                <Route path='/category/games' element={<ItemListContainer />}/>    
                                <Route path='/Cart' element={<Cart />}/>
                                <Route path='/*' element={<Navigate to='/' />} />
                            </Routes>
                        </div>
                    </CartContextProvider>
                </BrowserRouter>
    );
}

export default App;