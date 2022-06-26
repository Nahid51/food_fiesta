import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <div className="logo footer_logo text-start mt-3">
                            <img src={logo} alt="Logo" />
                            <h5>Food Fiesta</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum voluptatem?</p>
                        </div>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer_title'>Delivery Time</h5>
                        <ListGroup className='delivery_time-list'>
                            <ListGroupItem className="delivery_time-item border-0 ps-0">
                                <span>Sunday - Thrusday</span>
                                <p>10.00 am - 11.00 pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time-item border-0 ps-0">
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer_title'>Contact</h5>
                        <ListGroup className='delivery_time-list'>
                            <ListGroupItem className="delivery_time-item border-0 ps-0">
                                <span>Location: Dhanmondi, Dhaka-1209, Bangladesh</span>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time-item border-0 ps-0">
                                <span>Phone: +8801789654123</span>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time-item border-0 ps-0">
                                <span>Email: food99@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer_title'>Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className="newsletter">
                            <input type="email" placeholder='Enter your email' />
                            <span><i className="ri-send-plane-line"></i></span>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg='6' md='6'>
                        <p className='copywrite_text'>Copywrite &copy; 2022, website made by Nahid Hasan. All Rights Reserved.</p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="social_links d-flex align-items-center justify-content-end gap-4">
                            <p className='m-0'>Follow: </p>
                            <span><Link to="https://www.facebook.com"><i className="ri-facebook-line"></i></Link></span>

                            <span><Link to="https://github.com/Nahid51"><i className="ri-github-line"></i></Link></span>

                            <span><Link to="https://www.youtube.com"><i className="ri-youtube-line"></i></Link></span>

                            <span><Link to="https://www.linkedin.com/in/md-nahid-hasan-12a720199/"><i className="ri-linkedin-line"></i></Link></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;