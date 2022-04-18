import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Single = ()=>{

    const {username}= useParams();

    const [single,setsingle]=useState({
        name : '',
        Email : '',
        Number : '',
        Photo : ''
    });

    useEffect(()=>{
        axios.get(`http://localhost:5050/Devs?username=${username}`).then(res=>{
            setsingle({
                ...res.data[0]
            });
        }).catch(error=>{
            console.log(error);
        })
    },[single]);

    return(
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Img style={{height :"200px", objectFit : "cover"}} src={single.Photo}/>
                    <h1>{single.name}</h1>
                    <h3>{single.Email}</h3>
                    <h4>{single.Number}</h4>
                    </Card.Body>
                    <Card.Footer>
                    <Link className="btn btn-primary btn-sm" to='/'>All Devs</Link>
                  </Card.Footer>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Single;