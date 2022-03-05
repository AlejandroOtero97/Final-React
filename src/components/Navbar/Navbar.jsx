import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Widget from '../Widget/Widget'
import NavDropdown from "react-bootstrap/NavDropdown"




function NavBar() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Moebiuz-eCommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Games</Nav.Link>
                <Nav.Link href="#pricing">Parts</Nav.Link>
                
            </Nav>
            <Nav>
                
                <Nav.Link eventKey={2} href="#memes">
                    <Widget />
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
   
  )
}

export default NavBar
