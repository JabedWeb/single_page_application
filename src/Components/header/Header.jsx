import { Card, Col, Container, Row } from "react-bootstrap";
import './Header.css'
const Header=()=>{
    return (
        <>
            <Row>
                <Col>
                <Card className="d-flex justify-content-between flex-row px-4">
                    <div>
                        <img src="https://shadhinweb.com/wp-content/uploads/elementor/thumbs/Logo-pknludivh9imtwijpklp70li2gd79l73326lb7rwho.png" alt="#" />
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Devs</a></li>
                        <li><a href="#">Single Page</a></li>
                        <li><a href="#">Dashboard</a></li>
                    </ul>
                </Card>
                
                </Col>
            </Row>
        </>
    )
}
export default Header;