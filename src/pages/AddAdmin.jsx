import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { makeAdmin } from '../store/authentication/userSlice';
import { toast } from "react-toastify";

const AddAdmin = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const emailId = {
        email: email
    }

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        if (emailId) {
            dispatch(makeAdmin({ emailId, toast }));
            setEmail("");
        };
    };


    return (
        <div className='w-50 mx-auto my-5'>
            <h5 className='mb-4'>Make an Admin</h5>
            <form className=' border rounded p-3'>
                <div className="form_group">
                    <input
                        type="text"
                        placeholder='Enter an email address'
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <button onClick={handleMakeAdmin} className="logout_btn">Make Admin</button>
            </form>
        </div>
    );
};

export default AddAdmin;