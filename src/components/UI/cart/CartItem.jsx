import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import productImg from '../../../assets/images/product_01.1.jpg';
import '../../../styles/cartItem.css';

const CartItem = () => {
    return (
        <div>
            <ListGroupItem className='border-0 cart_item'>
                <div className="cart_item-info d-flex gap-2">
                    <img src={productImg} alt="product-img" />

                    <div className="cart_product-info w-100 d-flex align-items-center justify-content-center gap-4">
                        <div>
                            <h6 className='cart_product-title'>Burger</h6>
                            <p className='cart_product-price d-flex align-items-center gap-5'>2x <span>$24.00</span></p>
                            <div className='increase_decrease-btn d-flex align-items-center justify-content-between'>
                                <span className='increase_btn'><i className="ri-add-line"></i></span>
                                <span className='cartQuantity'>2</span>
                                <span className='decrease_btn'><i className="ri-subtract-line"></i></span>
                            </div>
                        </div>
                        <span className='delete_btn'><i className="ri-close-line"></i></span>
                    </div>
                </div>
            </ListGroupItem>
        </div>
    )
}

export default CartItem;