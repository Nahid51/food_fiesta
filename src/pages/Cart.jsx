import React from 'react';
import CommonSection from '../components/UI/commonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';
import '../styles/cartPage.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <Helmet title="Cart">
            <CommonSection title="Your Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {
                                cartItems.length === 0 ?
                                    <h5 className='text-center'>Your cart is empty</h5> :
                                    <table className='table table-bordered'>
                                        <thead >
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Title</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item => (
                                                    <Tr item={item} key={item._id} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                            }

                            <div className='mb-3'>
                                <h6>Subtotal: $<span className='cart_subtotal'>{totalAmount}</span></h6>
                                <p>Taxes and shipping bill calculate at chekout</p>
                                <div className='cart_page-btn'>
                                    <button className="addToCart_btn me-3">
                                        <Link to="/foods">Continue Shopping</Link>
                                    </button>
                                    <button className="addToCart_btn">
                                        <Link to="/checkout">Proceed to chekout</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({ item }) => {
    const { _id, imageFile, title, price, quantity } = item;
    const dispatch = useDispatch();
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(_id))
    }
    return (
        <tr>
            <td className='text-center cart_img-box'>
                <img src={imageFile} alt="Food_Photo" />
            </td>
            <td className='text-center'>{title}</td>
            <td className='text-center'>${price}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center cart_item-delete'>
                <i className="ri-delete-bin-line" onClick={deleteItem}></i>
            </td>
        </tr>

    )
}

export default Cart;