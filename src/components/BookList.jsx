import React, { Component } from "react";
import { Card, Row, Col, Container} from "react-bootstrap";
import fantasy from "../fantasy.json";

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {
            fantasy.map(book=> {
              return  <Col className="mx-auto">
              <Card>
                <Card.Img
                  className="book-cover"
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            })
          }
        </Row>
      </Container>
    );
  }
}

export default BookList;
