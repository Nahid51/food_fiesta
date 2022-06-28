import React, { useState } from 'react';
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import ProductCard from '../components/UI/product.card/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/foodDetails.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';

const FoodDetails = () => {
    const { id } = useParams();
    const [tab, setTab] = useState('desc');
    const dispatch = useDispatch();
    const [enterName, setEnterName] = useState('');
    const [enterEmail, setEnterEmail] = useState('');
    const [reviewMsg, setReviewMsg] = useState('');

    const product = products.find(product => product.id === id)
    const [previewImg, setPreviewImg] = useState(product.image01);
    const { title, price, category, desc, image01 } = product;
    const relatedProduct = products.filter(item => category === item.category);

    const addItem = () => {
        dispatch(cartActions.addItem({
            id, title, price, image01
        }))
    }

    const submitHandler = e => {
        e.preventDefault();
    }

    useEffect(() => {
        setPreviewImg(product.image01)
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product]);


    return (
        <Helmet title="product-details">
            <CommonSection title={title} />
            <section>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className='product_images'>
                                <div className="img_item mb-3" onClick={() => setPreviewImg(product.image01)}>
                                    <img src={product.image01} alt="Product_Image" className='w-50' />
                                </div>

                                <div className="img_item mb-3" onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt="Product_Image" className='w-50' />
                                </div>

                                <div className="img_item" onClick={() => setPreviewImg(product.image03)}>
                                    <img src={product.image03} alt="Product_Image" className='w-50' />
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="4">
                            <div className='product_main-img'>
                                <img src={previewImg} alt="Product_Image" className='w-100' />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="single_product-content">
                                <h2 className='product_title mb-3'>{title}</h2>
                                <p className='product_price'>Price: <span>${price}</span></p>
                                <p className='category mb-5'>Category: <span>{category}</span></p>
                                <button onClick={addItem} className='addToCart_btn'>Add to cart</button>
                            </div>
                        </Col>

                        <Col lg="12" className='mt-5'>
                            <div className="tabs d-flex align-items-center gap-5 py-2">
                                <h6 className={` ${tab === 'desc' ? 'tab_active' : ''} `} onClick={() => setTab('desc')}>Description</h6>
                                <h6 className={` ${tab === 'review' ? 'tab_active' : ''} `} onClick={() => setTab('review')}>Review</h6>
                            </div>

                            {
                                tab === 'desc' ?
                                    <div className="tab_content">
                                        <p>{desc}</p>
                                    </div> :
                                    <div className="tab_form mb-3">
                                        <div className="review_text">
                                            <p className="user_name mb-0">Jhon Deo</p>
                                            <p className="user_email">jhon02@gmai.com</p>
                                            <p className='feedback_text'>great product</p>
                                        </div>

                                        <div className="review_text">
                                            <p className="user_name mb-0">Jhon Deo</p>
                                            <p className="user_email">jhon02@gmai.com</p>
                                            <p className='feedback_text'>great product</p>
                                        </div>

                                        <form className="form" onSubmit={submitHandler}>
                                            <div className='form_group'>
                                                <input
                                                    type="text"
                                                    placeholder='Enter your name'
                                                    onChange={e => setEnterName(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className='form_group'>
                                                <input
                                                    type="text"
                                                    placeholder='Enter your email'
                                                    onChange={e => setEnterEmail(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className='form_group'>
                                                <textarea
                                                    rows={4}
                                                    type="text"
                                                    placeholder='Write your review'
                                                    onChange={e => setReviewMsg(e.target.value)}
                                                />
                                            </div>
                                            <button type='submit' className='addToCart_btn'>Submit</button>
                                        </form>
                                    </div>}
                        </Col>

                        <Col lg="12" className='mb-5 mt-4'>
                            <h4 className='related_product-title fw-bold'>You may also like</h4>
                        </Col>

                        {
                            relatedProduct.map(item => (
                                <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default FoodDetails;