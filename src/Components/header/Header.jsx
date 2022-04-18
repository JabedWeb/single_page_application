import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
const Header=()=>{
    return (
        <>
            <Row>
                <Col>
                <Card className="d-flex justify-content-between flex-row px-4">
                    <div>
                      <Link to='/'><img src="https://shadhinweb.com/wp-content/uploads/elementor/thumbs/Logo-pknludivh9imtwijpklp70li2gd79l73326lb7rwho.png" alt="#" /></Link>
                    </div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/add_devs'>Devs</Link></li>
                        <li><Link to='/single'>Single Page</Link></li>
                        <li><Link to='/admin'>Dashboard</Link></li>
                    </ul>
                </Card>
                
                </Col>
            </Row>
        </>
    )
}
export default Header;