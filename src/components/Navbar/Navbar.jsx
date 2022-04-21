import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Widget from '../Widget/Widget'
import { NavLink, Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import './navbar.css';

function NavBar() {
  const { cantidad, cartList } = useCartContext()

  return (
    
    <Navbar collapseOnSelect>
        <Container>
            <NavLink to='/' className='brand'><label className='brand-title'>Moebiuz</label><strong>Shop</strong></NavLink>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to='/categorias/games' className="nav-link" >
              Games
            </Link>
            <Link to='/categorias/movies' className="nav-link" >
              Movies
            </Link>
            <Link to='/categorias/anime' className="nav-link" >
              Anime
            </Link>
            </Nav>
                <NavLink to='/Cart'><Widget /></NavLink>
                <div className='nav-counter'>
                  { cartList.length > 0 && cantidad()}
                </div>
            </Navbar.Collapse>
        </Container>

        
    </Navbar>
    
   
  )
}

export default NavBar
