import { Table, Container, Form } from "react-bootstrap";
import { directors } from "./data";
import { React, useState } from "react";

function Director() {
  const [searchTerm, setSearchTerm] = useState("");
  const filters = directors.filter((d) => {
    const matchesTitle = d.FullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTitle;
  });

  return (
    <Container className="mt-6">
      <h3 className="mb-4">Directors List</h3>
      <Form.Control
        type="text"
        placeholder="Search by full name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />
      <Table bordered striped hover style={{ backgroundColor: "lightblue" }}>
        <thead className="table-info">
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Nationality</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className="table-info">
          {filters.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.FullName}</td>
              <td>{s.Male ? "Male" : "Female"}</td>
              <td>{s.Dob}</td>
              <td>{s.Nationality}</td>
              <td>{s.Description.substring(0,255)}...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Director;