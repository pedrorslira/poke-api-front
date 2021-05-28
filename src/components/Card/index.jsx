import React from "react";
import { Card } from "react-bootstrap";

export default function index({ title, children, pathImg }) {
  return (
    <div>
      <Card bg="dark" text="light" style={{ width: "18rem", left : "65%", top: "100px" }}>
        <Card.Img variant="top" src={pathImg} />
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
      </Card>
    </div>
  );
}
