import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero.png';
import '../styles/hero.css';
import '../styles/home.css';
import Category from '../components/UI/category/Category';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';

const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg01,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dicta?"
    },
    {
        title: 'Super Dine In',
        imgUrl: featureImg02,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dicta?"
    },
    {
        title: 'Easy Pick Up',
        imgUrl: featureImg03,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dicta?"
    },
]

const Home = () => {
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero_content">
                                <h5 className='mb-3'>Easy way to make an order</h5>
                                <h1 className='mb-4 hero_title' ><span>HUNGRY?</span> Just wait <br /> food at<span> your door</span></h1>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos quod deserunt corporis eligendi fugit nostrum molestias perspiciatis doloribus dolorem?</p>

                                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                                    <button className='order_btn d-flex align-items-center justify-content-between'>Order now <i className="ri-arrow-right-s-line"></i></button>

                                    <button className='all_foods-btn'><Link to="/foods">See all foods</Link></button>
                                </div>

                                <div className='hero_service d-flex align-items-center gap-5 mt-5'>
                                    <p className='d-flex align-items-center gap-2'><span className='shipping_icon'><i className="ri-car-line"></i></span>No shipping charge</p>
                                    <p className='d-flex align-items-center gap-2'><span className='shipping_icon'><i className="ri-shield-check-line"></i></span>100% secure checkout</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero_img">
                                <img src={heroImg} alt="hero-img" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Category />
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h5 className="feature_subtitle mb-4">What we serve</h5>
                            <h2 className="feature_title">Just sit back at home</h2>
                            <h2 className="feature_title">We will <span>take care</span></h2>
                            <p className='mb-1 mt-4 feature_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At provident cupiditate porro quas neque.</p>
                            <p className='feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, commodi nulla fuga iure ipsa sit.</p>
                        </Col>

                        {
                            featureData.map((item, index) => (
                                <Col lg="4" md="4" key={index} className="mt-5">
                                    <div className="feature_item text-center px-5 py-3">
                                        <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />
                                        <h5 className='fw-bold mb-3'>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </Col>
                            ))
                        }

                        <Col lg="4" md="4"></Col>
                        <Col lg="4" md="4"></Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;