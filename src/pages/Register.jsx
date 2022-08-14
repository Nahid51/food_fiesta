import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import registerPhoto from '../assets/images/register.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { register } from '../store/authentication/userSlice';
import { Spinner } from "react-bootstrap";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const Register = () => {
    const [formValue, setFormValue] = useState(initialState);
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const { name, email, password, confirmPassword } = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return toast.error("Password didn't match!")
        }
        if (name && email && password && confirmPassword) {
            dispatch(register({ formValue, navigate, toast }));
        }
    };
    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };
    return (
        <Helmet title="Register">
            <CommonSection title="Register" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <img src={registerPhoto} alt="register_photo" className='w-100' />
                        </Col>

                        <Col lg="6" md="6" sm="12" className='text-center my-auto'>
                            <Form
                                className="mb-5 mx-3 p-3 rounded-1"
                                style={{ background: "#FDE4E4" }}
                                onSubmit={handleSubmit}
                            >
                                <i style={{ color: "#212245" }} className="ri-user-add-fill fs-5"></i>
                                <h6 style={{ color: "#212245" }}>Sign Up</h6>
                                <hr className='mb-4' />
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={onInputChange}
                                        placeholder="Enter name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={onInputChange}
                                        placeholder="Enter email"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={onInputChange}
                                        autoComplete="off"
                                        placeholder="Password"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Control
                                        className='border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent'
                                        type="password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={onInputChange}
                                        autoComplete="off"
                                        placeholder="Re-type Password"
                                        required
                                    />
                                </Form.Group>

                                {loading ? <Spinner animation="border" variant="warning" /> :
                                    <Button style={{ fontSize: 14 }} variant="danger" type="submit">
                                        Register
                                    </Button>
                                }
                            </Form>

                            <div>
                                <small>Already have an account?<NavLink to="/login" style={{ color: "blue" }}> Sign In</NavLink></small>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;