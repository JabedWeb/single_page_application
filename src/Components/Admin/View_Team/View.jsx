import { Card, Col, Container, Row, Table, Button } from "react-bootstrap";

const View = ()=>{
    return (
        <Container>
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                    <Table>
                        <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Action</th>
                        </thead>
                        <tbody>
                        <td>Jabed</td>
                        <td>jabedhasan231@gmail.com</td>
                        <td>01793534981</td>
                        <td><Button className="bg-dark">Deleted</Button> &nbsp;
                        <Button className="bg-dark">View</Button>
                        </td>
                        </tbody>
                    </Table>
                    </Card.Body>
                </Card>
                
                </Col>
            </Row>
        </Container>

    )
}

export default View;