import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <div>
          <Link to="/desafio1-happycake" className="text-decoration-none text-white p-2">
            🏠 Home
          </Link>
          <Link to="/desafio1-happycake/contacto" className="text-decoration-none text-white p-2">
            📙 Contacto
          </Link>
        </div>
        <Navbar.Brand>
          🍰 Happy Cake
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
