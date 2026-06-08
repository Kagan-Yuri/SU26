import React, { useState } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { genres } from "./data"; // Đảm bảo genres đã được export trong data.js

function Genres() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGenres = genres ? genres.filter((g) =>
    g.Name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-primary">Genres List</h3>
      <Form.Control
        type="text"
        placeholder="Search by genre name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />
      <Table bordered striped hover style={{ backgroundColor: "lightblue" }}>
        <thead className="table-info">
          <tr>
            <th>ID</th>
            <th>Genre Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredGenres.map((g) => (
            <tr key={g.id}>
              <td>{g.id}</td>
              <td className="fw-semibold">{g.Name}</td>
            </tr>
          ))}
          {filteredGenres.length === 0 && (
            <tr>
              <td colSpan="2" className="text-center text-muted">No genres found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default Genres;