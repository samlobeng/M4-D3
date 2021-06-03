import  { Component } from 'react'
import {Col , Card} from 'react-bootstrap'

class SingleBook extends Component {

    render() {
        return (
        <>
  {
    <Col className="mx-auto">
      <Card>
        <Card.Img className="book-cover img-fluid"variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  }
        </>
        )
    }
}
export default SingleBook