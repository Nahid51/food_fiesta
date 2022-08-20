import React, { useRef } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1kbj7kp', 'template_alowi8m', form.current, 'bnuzjboBxr-nvfU8L')
            .then((result) => {
                toast.success(`${result.text}, Message sent!`);
            }, (error) => {
                toast.error(error.text);
            });
        e.target.reset();
    };

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
                        <h5 className='footer_title mb-3'>Feedback</h5>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    as="textarea"
                                    placeholder='Message'
                                    name="message"
                                    rows={2}
                                    required />
                            </Form.Group>
                            <Button type='submit' variant='danger'>Send</Button>
                        </Form>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg='6' md='6'>
                        <p className='copywrite_text'>Copywrite &copy; 2022, website made by Nahid Hasan. All Rights Reserved.</p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="social_links d-flex align-items-center justify-content-end gap-4">
                            <p className='m-0'>Follow: </p>
                            <span><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="ri-facebook-box-fill"></i></a></span>

                            <span><a href="https://github.com/Nahid51" target="_blank" rel="noreferrer"><i className="ri-github-fill"></i></a></span>

                            <span><a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i className="ri-youtube-fill"></i></a></span>

                            <span><a href="https://www.linkedin.com/in/md-nahid-hasan-12a720199/" target="_blank" rel="noreferrer"><i className="ri-linkedin-box-fill"></i></a></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;