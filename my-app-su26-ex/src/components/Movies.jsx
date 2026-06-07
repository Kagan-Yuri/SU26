import { React, useState } from "react";
import { movies } from "../Data";
import { Button, Col, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [selectedM,setSelectedM] = useState(null); 
  const navigate = useNavigate();
  const handleViewShowtime = (movieId =>
  navigate(`/view-showtime/${movieId}`));
  const handleSelected = (m) => {
    setSelectedM(m);
  };

  return (
    <Row>
      <h2
        style={{ textAlign: "center", marginBottom: "20px", fontSize: "2rem" }}
      >
        Movies
      </h2>
      <Row className="d-flex flex-wrap justify-content-center">
        {movies?.map((m => (
          <Col key={m.id} md={4} className="mb-4">
            <Card
              key={m.id}
              className="card m-2"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>{m.title}</Card.Title>
                <Card.Text>Duration: {m.duration} mins</Card.Text>
                <Card.Text>Director: {m.director}</Card.Text>
                <Card.Text>Rating: {m.rating}</Card.Text>
                <Button onClick ={() => handleSelected(m)}> To View Showtime </Button>
                <Button className="btn btn-primary" onClick={() => handleViewShowtime(m.id)}>View Showtime</Button>
              </Card.Body>
            </Card>
          </Col>
        )))}
      </Row>
      { selectedM && (
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>{selectedM.title}</Card.Title>
            <Card.Text>Duration: {selectedM.duration} mins</Card.Text>
            <Card.Text>Director: {selectedM.director}</Card.Text>
            <Card.Text>Rating: {selectedM.rating}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Row>
  );
}

export default Movies;
