import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

import Logo from '../assets/images/burger-logo.png';
function Navbar() {
  return (
    <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavBar.Brand href="#home">
        <img src={Logo} alt="burger logo" width={45} height={29} />
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="responsive-NavBar-nav" />
        <NavBar.Collapse id="responsive-NavBar-nav">
          <Nav className="me-auto">
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Burger Builder</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SignIn
            </Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
   );
}

export default Navbar
