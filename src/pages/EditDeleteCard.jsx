import React from 'react';
import { Card, Col } from "react-bootstrap";

const EditDeleteCard = ({ foods }) => {

    const { _id, category, createdAt, creator, desc, imageFile, price, title } = foods;

    return (
        <tr>
            <td><img src={imageFile} alt="ProductsPhoto" className='w-50' /></td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{desc}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
};

export default EditDeleteCard;