import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../../../styles/shoppingCart.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiAction } from '../../../store/shopping-cart/cartUiSlice';

const Carts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    console.log(cartProducts);

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
                    {
                        cartProducts.length === 0 ? <h6 className='text-center mt-5'>No item added to the cart</h6> : cartProducts.map((item, index) => (
                            <CartItem item={item} key={item._id} />
                        ))
                    }
                </div>

                <div className="cart_bottom d-flex align-items-center justify-content-between">
                    <h6>Subtotal: <span>৳{totalAmount}</span></h6>
                    <button><Link to="/checkout">Checkout</Link></button>
                </div>
            </ListGroup>
        </div>
    );
};

export default Carts;