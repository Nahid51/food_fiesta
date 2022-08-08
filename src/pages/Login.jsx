import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import loginPhoto from '../assets/images/login.jpg';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from '../store/authentication/userSlice';

const initialState = {
    email: "",
    password: ""
}

const Login = () => {
    const [formValue, setFormValue] = useState(initialState);
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const { email, password } = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(login({ formValue, navigate, toast }));
        }
    };
    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    // const googleSuccess = (resp) => {
    //   const email = resp?.profileObj?.email;
    //   const name = resp?.profileObj?.name;
    //   const token = resp?.tokenId;
    //   const googleId = resp?.googleId;
    //   const result = { email, name, token, googleId };
    //   dispatch(googleSignIn({ result, navigate, toast }));
    // };
    // const googleFailure = (error) => {
    //   toast.error(error);
    // };

    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className='text-center my-auto'>
                            <Form onSubmit={handleSubmit} className="mb-5 mx-3 p-3 rounded-1" style={{ background: "#FDE4E4" }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="email"
                                        value={email}
                                        name="email"
                                        onChange={onInputChange}
                                        placeholder="Enter email"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="password"
                                        value={password}
                                        name="password"
                                        onChange={onInputChange}
                                        placeholder="Password"
                                        required
                                    />
                                </Form.Group>

                                <Button style={{ fontSize: 14 }} variant="danger" type="submit">
                                    Login
                                </Button>
                            </Form>

                            <Link to="/register">Don't have an account? Sign Up</Link>

                            <div className='mt-5 mb-2' style={{ color: "#212245" }}>
                                or Login with
                            </div>

                            <div className='d-flex align-items-center justify-content-center gap-3'>
                                <Button variant="danger">
                                    <i className="ri-google-fill"></i>
                                </Button>
                                <Button className='facebook_icon'>
                                    <i className="ri-facebook-fill"></i>
                                </Button>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="12">
                            <img src={loginPhoto} alt="login_photo" className='w-100' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;