import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  // BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Donate from './Donate';
import Home from './Home';
import Resources from './Resources';

function Header() {
  return (
    // <BrowserRouter>
    <>
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to='/'>J 4 F</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey='1' as={Link} to='/'>Home</Nav.Link>
            <Nav.Link eventKey='2' as={Link} to='/about'>About</Nav.Link>
            <Nav.Link eventKey='3' as={Link} to='/resources'>Resources</Nav.Link>
            <Nav.Link eventKey='4' as={Link} to='/donate'>Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/donate' element={<Donate/>} />
      </Routes>
    </div>
    </>
    // </BrowserRouter>
  );
}

export default Header;