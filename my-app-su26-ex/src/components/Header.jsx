import { Navbar,Nav,Form,Button } from 'react-bootstrap';
import React from 'react'

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className='d-flex'>
          <Form.Control type = 'search' placeholder = 'Search' className = 'mr-sm-4'/> 
          <Button variant = 'outline-light'  style={{ color: 'green' }} >Search</Button> 
        </Form>
      </Navbar>
    </div>
  )
}

export default Header