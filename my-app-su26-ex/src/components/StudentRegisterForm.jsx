import { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

function StudentRegisterForm() {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShowAlert(true);
    }
    setValidated(true);
  };
  return (
    <Container className="mt-4">
      <h4 className="text-center text-primary mb-3">Student Registration</h4>
      {showAlert && (
        <Alert variant="success">Student registered successfully!</Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Student ID</Form.Label>
              <Form.Control required placeholder="Enter student ID" />
              <Form.Control.Feedback type="invalid">
                Student ID is required
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control required placeholder="Enter full name" />
              <Form.Control.Feedback type="invalid">
                Full name is required
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" required />
              <Form.Control.Feedback type="invalid">
                Date of birth is required
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select required>
                <option value="">-- Select Gender --</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Gender is required
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Class</Form.Label>
              <Form.Select required>
                <option value="">-- Select Class --</option>
                <option>DB Systems</option>
                <option>Operating Systems</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Class is required
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center">
          <Button type="submit">Register Student</Button>
        </div>
      </Form>
    </Container>
  );
}

export default StudentRegisterForm;
