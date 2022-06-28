import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className='text-center'>
                            <form className="form mb-5">
                                <div className="form_group">
                                    <input type="email" placeholder='Email' required />
                                </div>

                                <div className="form_group">
                                    <input type="password" placeholder='Password' required />
                                </div>
                                <button type='submit' className="addToCart_btn">Login</button>
                            </form>
                            <Link to="/register">Already have an account? Create an account</Link>
                        </Col>

                        <Col lg="6" md="6" sm="12">
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;