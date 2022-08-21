import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommonSection from '../components/UI/commonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/checkout.css';
import { getDataForSSL } from '../store/features/paymentSlice';

const Checkout = () => {
    const [enterName, setEnterName] = useState('');
    const [enterEmail, setEnterEmail] = useState('');
    const [enterPhoneNo, setEnterPhoneNo] = useState('');
    const [enterCountry, setEnterCountry] = useState('');
    const [enterCity, setEnterCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const dispatch = useDispatch();


    const { totalAmount, totalQuantity, cartItems } = useSelector(state => state.cart);
    const shippingCost = 20;
    const totalShipAmount = totalAmount + Number(shippingCost);

    const foodData = cartItems.map((item) => item?.title);
    const food = foodData.toString();

    const submitForm = (e) => {
        e.preventDefault();
        const updatedPaymentData = {
            name: enterName,
            email: enterEmail,
            phone: enterPhoneNo,
            country: enterCountry,
            city: enterCity,
            postalCode: postalCode,
            totalAmount: totalShipAmount,
            totalQuantity: totalQuantity,
            productDetails: food,
        }
        dispatch(getDataForSSL({ updatedPaymentData }));
    };

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
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>৳{totalAmount}</span></h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>Shipping: <span>৳{shippingCost}</span></h6>
                                <div className='checkout_total'>
                                    <h5 className='d-flex align-items-center justify-content-between'>Total: <span>৳{totalShipAmount}</span></h5>
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