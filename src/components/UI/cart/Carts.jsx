import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../../../styles/shoppingCart.css';
import { useDispatch } from 'react-redux';
import { cartUiAction } from '../../../store/shopping-cart/cartUiSlice';

const Carts = () => {
    const dispatch = useDispatch();
    const toggleCart = () => {
        dispatch(cartUiAction.toggle())
    };
    return (
        <div className='cart_container'>
            <ListGroup className='cart'>
                <div className="cart_close">
                    <span onClick={toggleCart}><i className="ri-close-fill"></i></span>
                </div>

                <div className="cart_item-list">
                    <CartItem />
                </div>

                <div className="cart_bottom d-flex align-items-center justify-content-between">
                    <h6>Subtotal: <span>$123</span></h6>
                    <button><Link to="/checkout">Checkout</Link></button>
                </div>
            </ListGroup>
        </div>
    );
};

export default Carts;