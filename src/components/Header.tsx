import { Container, Navbar, Nav } from 'react-bootstrap';

export function Header() {
  return (
    <Navbar variant="dark" className="justify-content-center glass-blur">
      <Nav>
        <Nav.Link className="px-4">Menu</Nav.Link>
        <Nav.Link className="px-4">Menu</Nav.Link>
        <Nav.Link className="px-4">Menu</Nav.Link>
      </Nav>
    </Navbar>
  );
}
