import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <div className="logo footer_logo text-start">
                            <img src={logo} alt="Logo" />
                            <h5>Food Fiesta</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum voluptatem?</p>
                        </div>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5>Delivery Time</h5>
                        <ListGroup>
                            <ListGroupItem className="delivery_time border-0 ps-0">
                                <span>Sunday - Thrusday</span>
                                <p>10.00 am - 11.00 pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time border-0 ps-0">
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'></Col>
                    <Col lg='3' md='4' sm='6'></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;