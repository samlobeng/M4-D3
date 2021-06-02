import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'
import fantasy from '../fantasy.json'

export default function BookList(props){
    return( 

    fantasy.map(book=>{
      return (
    <ListGroup>
      <ListGroup.Item>{book.title}</ListGroup.Item>
    </ListGroup>

      )
    })
    )

}