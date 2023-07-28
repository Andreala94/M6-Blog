import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardPosts = ({ cover, _id, title, category }) => {


  return (

    <Container >
      <Row >
        <Col >

          <Card  className="gap-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cover} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Title>{category}</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>


        </Col>
      </Row>
    </Container>
  )
}

export default CardPosts;