import React from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'

function Add_team() {
  return (
    <Container className='mt-5'>
        <Row className='justify-content-center'>
            <Col  md={8}>
              <Card className='shadow'>
                  <h1 className='text-center'>Add New Team Member</h1>
                  <Card.Body>
                    <form action="#">
                        <Form.Group className='mt-3'>
                        <Form.Label> Your Name </Form.Label>
                        <Form.Control type="text" placeholder='Enter Name'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                        <Form.Label> Your Email </Form.Label>
                        <Form.Control type="email" placeholder='Enter Email'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                        <Form.Label> Number </Form.Label>
                        <Form.Control type="number" placeholder='Enter number'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                        <Form.Label> Your Photo </Form.Label>
                        <Form.Control type="photo" placeholder='Enter Photo'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                        <input className='btn btn-primary w-100' type="submit" />
                        </Form.Group>
                    </form>
                  </Card.Body>
                  <Card.Footer>
                    <a href="http://">All Devs</a>
                  </Card.Footer>
              </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Add_team;