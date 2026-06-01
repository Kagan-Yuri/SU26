import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// Slide 20 from React-Bootstrap documentation: https://react-bootstrap.github.io/components/modal/#modals

function Modal_S20() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="p-4 text-center">
      <Button variant="primary" onClick={handleShow}>
        Launch Demo Modal
      </Button>

      <Modal show={show} onHide={handleClose} centered data-bs-theme="dark" className="text-light">
        <Modal.Header closeButton className="bg-dark border-secondary">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="bg-dark">
          {/* Tái hiện form nhỏ bên trong Modal */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="bg-dark border-secondary">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modal_S20;