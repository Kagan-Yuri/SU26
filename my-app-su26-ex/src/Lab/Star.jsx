import { Container, Form, Row, Col, Card } from "react-bootstrap";
import { stars } from "./data";
import { React, useState } from "react";

function Star() {
  const uniqueYears = [
    "All Years",
    ...new Set(
      stars
        .map((star) => (star.Dob ? star.Dob.split("-")[0] : null))
        .filter(Boolean),
    ),
  ];
  const slcGender = [
    "All",
    ...new Set(stars.map((star) => (star.Male ? "Male" : "Female"))),
  ];

  const [selectedY, setSelectedY] = useState("All Years");
  const [selectedG, setSelectedG] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = stars.filter((s) => {
    const starYear = s.Dob ? s.Dob.split("-")[0] : null;
    const matchesY = selectedY === "All Years" || starYear === selectedY;

    const starGender = s.Male ? "Male" : "Female";
    const matchesG = selectedG === "All" || starGender === selectedG;
    const matchesTitle = s.FullName.toLowerCase().includes(
      searchTerm.toLowerCase(),
    );
    return matchesTitle && matchesG && matchesY;
  });

  return (
    <Container className="mt-4">
      <h3 className="mb-3 fw-bold">Stars List</h3>

      <Row className="mb-4 g-3">
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="Search by full name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>

        <Col md={3}>
          <Form.Select
            value={selectedG}
            onChange={(e) => setSelectedG(e.target.value)}
          >
            {slcGender.map((gender, index) => (
              <option key={index} value={gender}>
                {gender}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Select
            value={selectedY}
            onChange={(e) => setSelectedY(e.target.value)}
          >
            {uniqueYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row className="g-3">
        {filters.map((star) => (
          <Col key={star.id} xs={12} sm={6} md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold mb-3">
                  {star.FullName}
                </Card.Title>

                <Card.Text className="mb-1">
                  <strong>ID:</strong> {star.id}
                </Card.Text>

                <Card.Text className="mb-1">
                  <strong>Gender:</strong> {star.Male ? "Male" : "Female"}
                </Card.Text>

                <Card.Text className="mb-1">
                  <strong>DOB:</strong> {star.Dob}
                </Card.Text>

                <Card.Text className="mb-3">
                  <strong>Nationality:</strong> {star.Nationality}
                </Card.Text>

                <Card.Text className="text-muted small">
                  <strong>Description:</strong>{" "}
                  {star.Description.substring(0, 50)}...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Star;