import { Card, Col, Container, Row } from "react-bootstrap";

const Single = ()=>{
    return(
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Img style={{height :"200px", objectFit : "cover"}} src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"/>
                    <h1>Jabed Hasan</h1>
                    <h3>Jabedhasan231@gmail.com</h3>
                    <h4>01793534981</h4>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Single;