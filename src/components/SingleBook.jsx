import  { Component } from 'react'
import {Col,Row,Card} from 'react-bootstrap'

class Book extends Component {

    render() {
        return (
        <>
        <Row xs={1} md={2} lg={4} className="g-4 d-flex">
  {
  
    <Col className="mx-auto">
      <Card>
        <Card.Img className="book-cover"variant="top" src={this.props.data.img} />
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  }
</Row>

        </>
        )
    }
}

export default Book