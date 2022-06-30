import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import { Container, Row, Col } from 'react-bootstrap';
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
                            <form className="form mb-5">
                                <div className="form_group">
                                    <input
                                        type="text"
                                        placeholder='Name'
                                        required
                                    />
                                </div>

                                <div className="form_group">
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        required
                                    />
                                </div>

                                <div className="form_group">
                                    <input
                                        type="password"
                                        placeholder='Password'
                                        required
                                    />
                                </div>

                                <div className="form_group">
                                    <input
                                        type="password"
                                        placeholder='Re-type password'
                                        required
                                    />
                                </div>

                                <button type='submit' className="addToCart_btn">Sign Up</button>
                            </form>
                            <Link to="/login">Already have an account? Login here</Link>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;