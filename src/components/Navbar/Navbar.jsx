import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Widget from '../Widget/Widget'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    
    <Navbar collapseOnSelect>
        <Container>
            <NavLink to='/' className='brand'><label className='brand-title'>Moebiuz</label><strong>Shop</strong></NavLink>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="/" className="links">Games</NavLink>
                <NavLink to="/categoria/parts" className="links">Parts</NavLink>
            </Nav>
            <Nav>
                <NavLink to='/Cart'><Widget /></NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
   
  )
}

export default NavBar
