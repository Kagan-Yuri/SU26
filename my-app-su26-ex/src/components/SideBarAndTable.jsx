import React from 'react';
import { Container, Row, Col, Nav, Table } from 'react-bootstrap';

function SidebarAndTable() {
  return (
    <Container className="my-4">
      <Row>
        {/* Cột trái: Thanh điều hướng dọc (Sidebar) */}
        <Col md={2} className="mb-4">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link eventKey="link-1">Features</Nav.Link>
            <Nav.Link eventKey="link-2">Pricing</Nav.Link>
          </Nav>
        </Col>

        {/* Cột phải: Bảng dữ liệu (Table) */}
        <Col md={10}>
          {/* Sử dụng thuộc tính striped (sọc), bordered (có viền), hover (hiệu ứng di chuột) */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                {/* Dùng colSpan={2} để gộp 2 cột First Name và Last Name lại giống trong ảnh */}
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default SidebarAndTable;