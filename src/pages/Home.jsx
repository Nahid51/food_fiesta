import React, { useState, useEffect } from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero.png';
import '../styles/hero.css';
import '../styles/home.css';
import Category from '../components/UI/category/Category';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product.card/ProductCard';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getFoods } from '../store/features/foodSlice';

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
    const dispatch = useDispatch();
    const { foods, loading } = useSelector((state) => ({ ...state.food }));
    useEffect(() => {
        dispatch(getFoods());
    }, [dispatch]);

    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(foods);
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filterPizza = foods.filter(item => item.category === "Pizza")
        const slicePizza = filterPizza.slice(0, 4)
        setHotPizza(slicePizza)
    }, [foods]);

    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(foods)
        }
        if (category === "BURGER") {
            const filterProducts = foods.filter(item => item.category === "Burger")
            setAllProducts(filterProducts)
        }
        if (category === "PIZZA") {
            const filterProducts = foods.filter(item => item.category === "Pizza")
            setAllProducts(filterProducts)
        }
        if (category === "BREAD") {
            const filterProducts = foods.filter(item => item.category === "Bread")
            setAllProducts(filterProducts)
        }
    }, [category, foods]);

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
                            <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, mollitia?</p>
                            <p className='feature_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, delectus.</p>
                        </Col>

                        {
                            featureData.map((item, index) => (
                                <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                                    <div className="feature_item text-center px-5 py-3">
                                        <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />
                                        <h5 className='fw-bold mb-3'>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2>Popular Foods</h2>
                        </Col>

                        <Col lg="12">
                            <div className="food_category d-flex align-items-center justify-content-center gap-4">
                                <button
                                    className={`all_btn ${category === "ALL" ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("ALL")}
                                >All</button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "BURGER" ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("BURGER")}
                                ><img src={foodCategoryImg01} alt="" />Burger</button>

                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("PIZZA")}
                                ><img src={foodCategoryImg02} alt="" />Pizza</button>

                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "BREAD" ? 'foodBtnActive' : ''}`}
                                    onClick={() => setCategory("BREAD")}
                                ><img src={foodCategoryImg03} alt="" />Bread</button>
                            </div>
                        </Col>

                        {loading ?
                            <Spinner className='mx-auto mt-5' animation="border" variant="warning" />
                            :
                            allProducts.map(item => (
                                <Col col="3" md="4" sm="6" xs="6" key={item._id} className="mt-5">
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section className='why_choose-us'>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <img src={whyImg} alt="why-testy-treat" className='w-100' />
                        </Col>

                        <Col lg="6" md="6">
                            <div className="why_tasty-treat">
                                <h2 className='tasty_treat-title mb-4'>
                                    Why <span>Testy Treat?</span>
                                </h2>
                                <p className='tasty_treat-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta et aliquid rem officiis inventore aspernatur laboriosam assumenda, architecto recusandae numquam est delectus minus ex non ducimus soluta esse placeat necessitatibus?</p>

                                <ListGroup className='mt-4'>
                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='choos_us-title d-flex align-items-center gap-2'>
                                            <i className="ri-checkbox-circle-line"></i>
                                            Fresh and tasty foods
                                        </p>
                                        <p className='choose_us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit qui velit, placeat voluptates laborum.</p>
                                    </ListGroupItem>

                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='choos_us-title d-flex align-items-center gap-2'>
                                            <i className="ri-checkbox-circle-line"></i>
                                            Quality support
                                        </p>
                                        <p className='choose_us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit qui velit, placeat voluptates laborum.</p>
                                    </ListGroupItem>

                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='choos_us-title d-flex align-items-center gap-2'>
                                            <i className="ri-checkbox-circle-line"></i>
                                            Order from any location
                                        </p>
                                        <p className='choose_us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit qui velit, placeat voluptates laborum.</p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center mb-5'>
                            <h2>Hot Pizza</h2>
                        </Col>

                        {
                            hotPizza.map(item => (
                                <Col lg="3" md="4" key={item._id}>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className='testimonial'>
                                <h5 className='testimonial_subtitle mb-4'>Testimonial</h5>
                                <h2 className='testimonial_title mb-4'>What our <span>customer</span> are saying</h2>
                                <p className='testimonial_desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et perspiciatis unde facere iste quos nulla temporibus possimus nisi, quas optio.</p>

                                <TestimonialSlider />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <img src={networkImg} alt="testimonial-img" className='w-100' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;