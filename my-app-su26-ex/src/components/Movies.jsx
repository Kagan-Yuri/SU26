import React from "react";
import { movies } from "../Data";
import { Button, Col, Card } from "react-bootstrap";

function Movies() {
  return (
    <div>
      <h2
        style={{ textAlign: "center", marginBottom: "20px", fontSize: "2rem" }}
      >
        Movies
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {movies.map((movie) => (
          <Col key={movie.id} md={4} className="mb-4">
            <Card
              key={movie.id}
              className="card m-2"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Duration: {movie.duration} mins</Card.Text>
                <Card.Text>Director: {movie.director}</Card.Text>
                <Card.Text>Rating: {movie.rating}</Card.Text>
                <Button className="btn btn-primary">View Showtime</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
}

export default Movies;
