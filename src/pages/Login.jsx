import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginPhoto from '../assets/images/login.jpg';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { googleSignIn, login } from '../store/authentication/userSlice';
import { auth, googleProvider } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(login({ formValue, toast }));
            navigate(from, { replace: true });
        }
    };
    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const signInWithGoogle = e => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                const credential = GoogleAuthProvider.credentialFromResult(res);
                const token = credential.accessToken;
                const user = res.user;
                const name = user.displayName;
                const email = user.email;
                const googleId = user.uid;
                const result = { email, name, token, googleId };
                dispatch(googleSignIn({ result, toast }));
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    };


    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className='text-center my-auto'>
                            <Form onSubmit={handleSubmit} className="mb-5 mx-3 p-3 rounded-1" style={{ background: "#FDE4E4" }}>
                                <i style={{ color: "#212245" }} className="ri-user-follow-fill fs-5"></i>
                                <h6 style={{ color: "#212245" }}>Sign In</h6>
                                <hr className='mb-4' />
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

                                {loading ? <Spinner animation="border" variant="warning" /> :
                                    <Button style={{ fontSize: 14 }} variant="danger" type="submit">
                                        Login
                                    </Button>
                                }
                            </Form>

                            <Link to="/register">Don't have an account? Sign Up</Link>

                            <div className='mt-5 mb-2' style={{ color: "#212245" }}>
                                or Login with
                            </div>

                            <div>
                                <Button onClick={signInWithGoogle} variant="danger" className='d-flex align-items-center justify-content-center gap-3 mx-auto mb-2'>
                                    <i className="ri-google-fill"></i>
                                    <span>Sign in with google</span>
                                </Button>

                                <Button className='d-flex align-items-center justify-content-center gap-3 mx-auto'>
                                    <i className="ri-facebook-fill"></i>
                                    <span>Sign in with facebook</span>
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