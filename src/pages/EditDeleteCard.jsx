import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/editDeleteCard.css";
import { useDispatch } from "react-redux";
import { deleteFood } from '../store/features/foodSlice';
import { toast } from "react-toastify";

const EditDeleteCard = ({ foods }) => {
    const dispatch = useDispatch();
    const { _id, desc, imageFile, price, title } = foods;

    const handleDelete = (id) => {
        const confirmMsg = window.confirm("Are you sure to delete this food?");
        if (confirmMsg) {
            dispatch(deleteFood({ id, toast }))
        }

    };

    return (
        <tr>
            <td>
                <img src={imageFile} alt="ProductsPhoto" className='editDeleteCard_image' />
            </td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{desc}</td>
            <td>
                <Link to={`/addEditFood/${_id}`}><i className="ri-edit-2-fill editDeleteIcon"></i></Link>
            </td>
            <td><i onClick={() => handleDelete(_id)} className="ri-delete-bin-2-fill editDeleteIcon"></i></td>
        </tr>
    );
};

export default EditDeleteCard;