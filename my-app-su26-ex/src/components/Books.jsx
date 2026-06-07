import React from "react";
import { books } from "../Data";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Books() {
  const categories = [
    "All Categories",
    ...new Set(books.map((b) => b.category)),
  ];
  const authors = ["All Authors", ...new Set(books.map((b) => b.author))];
  const [selectedCat, setSelectedCat] = useState("All Categories");
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");
  const [searchTerm, setSearchTerm] = useState("");

  const filterBooks = books.filter((b) => {
    const matchesCategory =
      selectedCat === "All Categories" || b.category === selectedCat;
    const matchesAuthor =
      selectedAuthor === "All Authors" || b.author === selectedAuthor;
    const matchesTitle = b.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesAuthor && matchesTitle;
  });

  //ấn vào ảnh sẽ hiện chi tiết quyển sách thông qua đường dẫn
  const navigate = useNavigate();
  const handleViewBook = (bookId) => navigate(`/view-book/${bookId}`);
  return (
    <Container className="mt-4 mb-5">
      <h2 className="text-center mb-4" style={{ fontSize: "2rem" }}>
        Book List
      </h2>

      {/* Dòng chứa các bộ lọc và ô tìm kiếm */}
      <Row className="mb-3 g-3">
        <Col md={3}>
          <Form.Select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
          >
            {categories?.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
          >
            {authors?.map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Enter title to search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>

      {/* Dòng chứa nút Borrow căn phải */}
      <Row className="d-flex justify-content-end mb-4">
        <Button
          className="ms-auto"
          style={{ width: "100px" }}
          variant="success"
          onClick={() => {}}
        >
          Borrow
        </Button>
      </Row>

      {/* Lưới hiển thị danh sách sách */}
      <Row xs={1} md={2} lg={4} className="g-4">
        {filterBooks.map((b) => (
          <Col key={b.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={b.image}
                alt={b.title}
                style={{
                  height: "220px",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa",
                }}
                onClick={() => handleViewBook(b.id)}
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold mb-0">{b.title}</Card.Title>
              </Card.Body>

              {/* Dùng ListGroup flush để tạo các đường viền gạch ngang giữa các dòng */}
              <ListGroup
                className="list-group-flush"
                style={{ fontSize: "0.9rem" }}
              >
                <ListGroup.Item>
                  <strong>Author:</strong> {b.author}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Category:</strong> {b.category}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Rating:</strong> {b.rating}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Available Copies:</strong> {b.availableCopies}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Total Copies:</strong> {b.totalCopies}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Books;
