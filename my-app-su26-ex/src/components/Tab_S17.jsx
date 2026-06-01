import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
// Slide 17 from React-Bootstrap documentation: https://react-bootstrap.github.io/components/navs/#navs
function Tab_S17() {
  const handleSelect = (eventKey) => alert(`Selected: ${eventKey}`);

  return (
    <div className="p-4 bg-dark text-light" style={{ minHeight: '100vh' }}>
      {/* 1. Dạng Tab cơ bản (Gạch chân) */}
      <h5 className="mb-3">Standard Tabs Variant</h5>
      <Nav variant="tabs" defaultActiveKey="link-0" className="mb-4">
        <Nav.Item>
          <Nav.Link eventKey="link-0">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 2. Dạng Pills (Nút bo góc) */}
      <h5 className="mb-3">Pills Variant</h5>
      <Nav variant="pills" defaultActiveKey="active" className="mb-4">
        <Nav.Item>
          <Nav.Link eventKey="active">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 3. Dạng Pills kết hợp Dropdown */}
      <h5 className="mb-3">Pills with Dropdown</h5>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect} className="mb-4">
        <Nav.Item>
          <Nav.Link eventKey="1">NavLink 1 content</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">NavLink 2 content</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>NavLink 3 content</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      {/* 4. Dạng Tab co giãn đều (Fill / Justified) */}
      <h5 className="mb-3">Fill / Justified</h5>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-a">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-b">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Tab_S17;