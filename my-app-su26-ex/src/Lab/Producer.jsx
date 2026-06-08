import React, { useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { producers } from "./data"; // Đảm bảo đường dẫn file data chuẩn xác

function Producer() {
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc dữ liệu theo tên nhà sản xuất
  const filteredProducers = producers.filter((p) =>
    p.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-primary">Producers List</h3>
      <Form.Control
        type="text"
        placeholder="Search by producer name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />
      <Table bordered striped hover style={{ backgroundColor: "lightblue" }}>
        <thead className="table-info">
          <tr>
            <th>ID</th>
            <th>Producer Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducers.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td className="fw-semibold">{p.Name}</td>
            </tr>
          ))}
          {filteredProducers.length === 0 && (
            <tr>
              <td colSpan="2" className="text-center text-muted">No producers found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default Producer;