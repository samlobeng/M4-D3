import  { Component } from 'react'
import {Col,Row,Card} from 'react-bootstrap'

class Book extends Component {

    render() {
        return (
        <>
        <Row xs={1} md={2} className="g-4">
  {
    <Col>
      <Card>
        <Card.Img variant="top" src={this.props.data.img} />
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