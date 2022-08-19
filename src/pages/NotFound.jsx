import React from 'react';
import photo from "../assets/images/404.jpg";
import "../styles/notFound.css";

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={photo} alt="Not Found" className='notFouond_page' />
        </div>
    );
};

export default NotFound;