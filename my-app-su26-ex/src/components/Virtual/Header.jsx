import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="px-4 d-flex justify-content-between">
      {/* Logo */}
      <Navbar.Brand as={Link} to="/home" className="fw-bold font-italic" style={{ fontSize: '24px' }}>
        ✓ NIKE
      </Navbar.Brand>

      {/* Các liên kết chuyển trang */}
      <Nav className="mx-auto d-flex flex-row gap-3">
        <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
        <Nav.Link as={Link} to="/about" className="text-white-50">About</Nav.Link>
        <Nav.Link as={Link} to="/blog" className="text-white-50">Blog</Nav.Link>
        <Nav.Link as={Link} to="/contact" className="text-white-50">Contact</Nav.Link>
      </Nav>

      {/* Form tìm kiếm */}
      <Form className="d-flex gap-2">
        <Form.Control
          type="search"
          placeholder="Search"
          className="form-control-sm"
          aria-label="Search"
        />
        <Button variant="outline-light" size="sm" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default Header;