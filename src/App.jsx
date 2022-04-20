import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer, ItemListContainer } from './Container';
import { Navbar, Cart } from './components'
import CartContextProvider from './context/CartContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css'


function App() {
    return (
                <BrowserRouter>
                    <CartContextProvider >
                        <div className="App">
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<ItemListContainer greeting="Welcome to the React Shop" />} />
                                <Route path='/details/:productId' element={<ItemDetailContainer />}/>     
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