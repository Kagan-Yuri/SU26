import React, { useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import { students as studentData } from '../Data'  // trùng tên thì đổi
function StudentTable() {
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState(null);
  const students = [...studentData]  
  const handleShow = (student) => {
    setStudent(student);
    setShow(true);
  };
  return (
    <Container className="mt-4">
      <h3 className="mb-3">Student List</h3>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>StudentID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} onClick={() => handleShow(s)}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.gender}</td>
              <td>{s.dob}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        style={{ top: "40px", left: "80px", position: "fixed" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {student && (
            <>
              <p>
                <b>ID:</b> {student.id}
              </p>
              <p>
                <b>Full Name:</b> {student.name}
              </p>
              <p>
                <b>Email:</b> {student.email}
              </p>
              <p>
                <b>Gender:</b> {student.gender}
              </p>
              <p>
                <b>Date of Birth:</b> {student.dob}
              </p>
              <p>
                <b>Class:</b> {student.class}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default StudentTable;
