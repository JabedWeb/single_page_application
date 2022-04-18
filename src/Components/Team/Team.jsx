import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {

    const [devs,setdevs]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5050/Devs').then(res=>{
            setdevs(res.data);
        }).catch(error=>{
            console.log(error);
        })
    },[devs]);
  return (
    <section className='team'>
       <Container className='my-5'>
           <Row>
               {
                   devs.map(data=>
                    <Col md={3}>
                     <Card>
                        <img alt='#' style={{height :"200px", objectFit : "cover"}} src={data.Photo}/>
                        <Card.Body>
                            <h1>{data.name}</h1>
                            <p>{data.number}</p>
                            <Link className="btn btn-success btn-sm" to={`/single/${data.username}`}>View Profile</Link>
                        </Card.Body>
                    </Card>
                   </Col>
                    )
               }
           </Row>
       </Container>
    </section>
  )
}

export default Team