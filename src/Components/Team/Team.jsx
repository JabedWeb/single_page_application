import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import './Team.css';

const Team = () => {
  return (
    <section className='team'>
       <Container className='my-5'>
           <Row>
               <Col md={3}>
                <Card>
                    <Card.Img style={{height :"200px", objectFit : "cover"}} src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"/>
                    <Card.Body>
                        <h1>Jabed</h1>
                        <p>01793534981</p>
                        <Button>View Profile</Button>
                    </Card.Body>
                </Card>
               </Col>
               <Col md={3}>
                <Card>
                    <Card.Img style={{height :"200px", objectFit : "cover"}} src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"/>
                    <Card.Body>
                        <h1>Jabed</h1>
                        <p>01793534981</p>
                        <Button>View Profile</Button>
                    </Card.Body>
                </Card>
               </Col>
           </Row>
       </Container>
    </section>
  )
}

export default Team