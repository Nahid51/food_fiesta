import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import '../../../styles/cartItem.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({ item }) => {
    const { _id, title, price, imageFile, quantity, totalPrice } = item;
    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(cartActions.addItem({
            _id, title, price, imageFile
        }))
    };
    const decreseItem = () => {
        dispatch(cartActions.removeItem(_id))
    };
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(_id))
    };

    return (
        <div>
            <ListGroupItem className='border-0 cart_item'>
                <div className="cart_item-info d-flex gap-2">
                    <img src={imageFile} alt="product-img" />

                    <div className="cart_product-info w-100 d-flex align-items-center justify-content-center gap-4">
                        <div>
                            <h6 className='cart_product-title'>{title}</h6>
                            <p className='cart_product-price d-flex align-items-center gap-5'>{quantity}x <span>৳{totalPrice}</span></p>
                            <div className='increase_decrease-btn d-flex align-items-center justify-content-between'>
                                <span className='increase_btn' onClick={incrementItem}><i className="ri-add-line"></i></span>
                                <span className='cartQuantity'>{quantity}</span>
                                <span className='decrease_btn' onClick={decreseItem}><i className="ri-subtract-line"></i></span>
                            </div>
                        </div>
                        <span className='delete_btn' onClick={deleteItem}><i className="ri-close-line"></i></span>
                    </div>
                </div>
            </ListGroupItem>
        </div>
    )
}

export default CartItem;