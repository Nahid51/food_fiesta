import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';
import ProductCard from '../components/UI/product.card/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/foodDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';
import { getFoods, getReviewsByFood, reviewFood } from '../store/features/foodSlice';
import { toast } from "react-toastify";

const initialstate = {
    name: "",
    email: "",
    reviewMsg: ""
};

const FoodDetails = () => {
    const { id } = useParams();
    const [tab, setTab] = useState('desc');
    const dispatch = useDispatch();
    const [review, setReview] = useState(initialstate);
    const { name, email, reviewMsg } = review;

    const { foods } = useSelector((state) => ({ ...state.food }));
    useEffect(() => {
        dispatch(getFoods());
    }, [dispatch]);

    const product = foods.find(pd => pd._id === id);
    const [previewImg, setPreviewImg] = useState(product?.imageFile);
    const { title, price, category, desc, imageFile } = product || "";
    const relatedProduct = foods.filter(item => category === item?.category);

    const addItem = () => {
        dispatch(cartActions.addItem({
            id, title, price, imageFile
        }))
    }

    useEffect(() => {
        setPreviewImg(product?.imageFile)
    }, [product]);


    const onInputChange = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    };

    const handleReviewForm = e => {
        e.preventDefault();
        if (name && email && reviewMsg) {
            const reviewFoodData = { ...review };
            console.log(reviewFoodData);
            dispatch(reviewFood({ id, reviewFoodData, navigator, toast }));
        }
    };

    const { foodReviews } = useSelector((state) => ({ ...state.food }));
    useEffect(() => {
        dispatch(getReviewsByFood(id));
    }, [dispatch, id]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Helmet title="product-details">
            <CommonSection title={title} />
            <section>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className='product_images'>
                                <div className="img_item mb-3" onClick={() => setPreviewImg(product?.imageFile)}>
                                    <img src={product?.imageFile} alt="Product_Image" className='w-50' />
                                </div>

                                <div className="img_item mb-3" onClick={() => setPreviewImg(product?.imageFile)}>
                                    <img src={product?.imageFile} alt="Product_Image" className='w-50' />
                                </div>

                                <div className="img_item" onClick={() => setPreviewImg(product.imageFile)}>
                                    <img src={product?.imageFile} alt="Product_Image" className='w-50' />
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
                                        {foodReviews[0]?.review?.length === 0 ?
                                            <h5 className='my-5'>The review section is empty. Please review our product.</h5>
                                            :
                                            foodReviews[0]?.review?.map((item, index) =>
                                                <div className="review_text" key={index}>
                                                    <p className="user_name mb-0">{item?.name}</p>
                                                    <p className="user_email mb-0">{item?.email}</p>
                                                    <p className='feedback_text'>{item?.reviewMsg}</p>
                                                </div>
                                            )}

                                        <form className="form" onSubmit={handleReviewForm}>
                                            <div className='form_group'>
                                                <input
                                                    type="text"
                                                    placeholder='Enter your name'
                                                    name='name'
                                                    onChange={onInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className='form_group'>
                                                <input
                                                    type="email"
                                                    placeholder='Enter your email'
                                                    name='email'
                                                    onChange={onInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className='form_group'>
                                                <textarea
                                                    rows={4}
                                                    type="text"
                                                    placeholder='Write your review'
                                                    name='reviewMsg'
                                                    onChange={onInputChange}
                                                    required
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
                                <Col lg="3" md="4" sm="6" xs="6" key={item._id}>
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