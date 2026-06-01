import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

// Slide 22 from React-Bootstrap documentation: https://react-bootstrap.github.io/components/cards/#cards

function Card_S22() {
  return (
    <Container className="my-4 d-flex justify-content-center">
      <Card style={{ width: '18rem' }} bg="dark" text="white" className="border-secondary">
        {/* Thay holder.js bằng một ảnh placeholder thực tế */}
        <Card.Img 
          variant="top" 
          src="https://via.placeholder.com/286x180/444/fff?text=286x180" 
          alt="Card placeholder image"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className="w-100">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Card_S22;