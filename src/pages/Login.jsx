import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import login from '../assets/images/login.jpg';
import '../styles/login.css';

const Login = () => {
    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className='text-center my-auto'>
                            <form className="form mb-5">
                                <div className="form_group">
                                    <input type="email" placeholder='Email' required />
                                </div>

                                <div className="form_group">
                                    <input type="password" placeholder='Password' required />
                                </div>
                                <button type='submit' className="addToCart_btn">Login</button>
                            </form>

                            <NavLink to="/register" style={{ color: "#212245" }}>Don't have an account? Create an account</NavLink>

                            <div className='mt-5 mb-2' style={{ color: "#212245" }}>
                                or Login with
                            </div>

                            <div className='d-flex align-items-center justify-content-center gap-3'>
                                <button className='google_icon'>
                                    <i className="ri-google-fill"></i>
                                </button>
                                <button className='facebook_icon'>
                                    <i className="ri-facebook-fill"></i>
                                </button>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="12">
                            <img src={login} alt="login_photo" className='w-100' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;