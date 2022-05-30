import { Col, Container, Navbar, Row, Image } from "react-bootstrap"
import logoImage from '../assets/logo.png'

const NavBar = () => {
    return(
        <Container>
            <Row>
                <Col md={1} className="border font-logo posisi-logo">&#0060;</Col>
                <Col md={1} className="border posisi-logo"><Image src={logoImage} alt="" /></Col>
                <Col className="border posisi-logo-3"><h1>ROCK PAPPER SCISSORS</h1></Col>
            </Row>
        </Container>
    )
}

export default NavBar;