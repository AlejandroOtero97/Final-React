import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Widget from '../Widget/Widget'




function NavBar() {
  return (
    
    <Navbar collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">MoebiuzShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#games">Games</Nav.Link>
                <Nav.Link href="#parts">Parts</Nav.Link>
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
