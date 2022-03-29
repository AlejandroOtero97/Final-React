import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Widget from '../Widget/Widget'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    
    <Navbar collapseOnSelect>
        <Container>
            <Navbar.Brand href="/" className='brand'><label className='brand-title'>Moebiuz</label><strong>Shop</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="categoria/games" className="links">Games</NavLink>
                <NavLink to="categoria/parts" className="links">Parts</NavLink>
            </Nav>
            <Nav>   
                <Nav.Link eventKey={2} href="/Cart">
                    <Widget />
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
   
  )
}

export default NavBar
