import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function HeaderRouter() {
  return (
    <Navbar bg="primary">
      <Navbar.Brand href="/home"> HOME </Navbar.Brand>
      <Nav className="me-auto">
        <NavLink
          to="/pictures"
          style={({ isActive }) => ({
            color: isActive ? "chocolate" : "#fff",
            textDecoration: "none",
            marginRight: "15px"
          })}
        >
          Pictures
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "chocolate" : "#fff",
            textDecoration: "none",
            marginRight: "15px"
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/help"
          style={({ isActive }) => ({
            color: isActive ? "chocolate" : "#fff",
            textDecoration: "none"
          })}
        >
          Help
        </NavLink>

        <NavLink
          to="/getview"
          style={({ isActive }) => ({
            color: isActive ? "chocolate" : "#fff",
            textDecoration: "none"
          })}
        >
          View
        </NavLink>
      </Nav>
      <Form className='d-flex'>
        <Form.Control className='me-4' type='search' placeholder='search'></Form.Control>
        <Button variant='outline-light' className='me-4'>Search</Button>
      </Form>
    </Navbar>
  );
}

export default HeaderRouter;
