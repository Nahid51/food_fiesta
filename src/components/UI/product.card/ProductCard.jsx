import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/productCard.css";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const ProductCard = ({ item }) => {
    const { _id, title, imageFile, price } = item;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem({
            _id, title, imageFile, price
        }))
    }
    return (
        <div className='product_item'>
            <div className="product_img">
                <img src={imageFile} alt="product-img" className='w-50' />
            </div>

            <div className="product_content">
                <h5><Link to={`/foods/${_id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product_price'>${price}</span>
                    <button className='addToCart_btn' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;