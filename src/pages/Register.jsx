import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import register from '../assets/images/register.jpg';

const Register = () => {
    return (
        <Helmet title="Register">
            <CommonSection title="Register" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <img src={register} alt="register_photo" className='w-100' />
                        </Col>

                        <Col lg="6" md="6" sm="12" className='text-center my-auto'>
                            <Form className="mb-5 mx-3 p-3 rounded-1" style={{ background: "#FDE4E4" }}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="text"
                                        name="name"
                                        placeholder="Enter name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Re-type Password"
                                        required
                                    />
                                </Form.Group>

                                <Button style={{ fontSize: 14 }} variant="danger" type="submit">
                                    Register
                                </Button>
                            </Form>
                            <Link to="/login">Already have an account? Sign In</Link>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;