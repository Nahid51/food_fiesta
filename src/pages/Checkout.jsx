import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CommonSection from '../components/UI/commonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/checkout.css';

const Checkout = () => {
    const [enterName, setEnterName] = useState('');
    const [enterEmail, setEnterEmail] = useState('');
    const [enterPhoneNo, setEnterPhoneNo] = useState('');
    const [enterCountry, setEnterCountry] = useState('');
    const [enterCity, setEnterCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const shippingInfo = [];
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const shippingCost = 10;
    const totalAmount = cartTotalAmount + Number(shippingCost);

    const submitForm = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enterName,
            email: enterEmail,
            phone: enterPhoneNo,
            country: enterCountry,
            city: enterCity,
            postalCode: postalCode
        }
        shippingInfo.push(userShippingAddress);
        console.log(shippingInfo);
    }

    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8' md='6'>
                            <h6 className='mb-4'>Shipping Address</h6>
                            <form className="checkout_form" onSubmit={submitForm}>
                                <div className="form_group">
                                    <input
                                        type="text"
                                        placeholder='Enter your name'
                                        onChange={(e) => setEnterName(e.target.value)}
                                        required />
                                </div>

                                <div className="form_group">
                                    <input
                                        type="email"
                                        placeholder='Enter your email'
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                        required />
                                </div>

                                <div className="form_group">
                                    <input
                                        type="number"
                                        placeholder='Phone number'
                                        onChange={(e) => setEnterPhoneNo(e.target.value)}
                                        required />
                                </div>

                                <div className="form_group">
                                    <input
                                        type="text"
                                        placeholder='Country'
                                        onChange={(e) => setEnterCountry(e.target.value)}
                                        required />
                                </div>

                                <div className="form_group">
                                    <input
                                        type="text"
                                        placeholder='City'
                                        onChange={(e) => setEnterCity(e.target.value)}
                                        required />
                                </div>

                                <div className="form_group">
                                    <input
                                        type="number"
                                        placeholder='Postal code'
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        required />
                                </div>
                                <button type='submit' className="addToCart_btn">Payment</button>
                            </form>
                        </Col>

                        <Col lg='4' md='6' className='checkout_column'>
                            <div className='checkout_bill'>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>${cartTotalAmount}</span></h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>Shipping: <span>${shippingCost}</span></h6>
                                <div className='checkout_total'>
                                    <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span></h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;