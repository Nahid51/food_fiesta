import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addFood, updateFood } from '../store/features/foodSlice';
import { Spinner } from "react-bootstrap";

const initialState = {
    title: "",
    price: "",
    category: "",
    desc: "",
};

const AddEditFood = () => {
    const [foodData, setFoodData] = useState(initialState);
    const { error, userFoods, loading } = useSelector((state) => ({ ...state.food }));
    const { user } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { title, desc, category, price } = foodData;
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const singleFood = userFoods.find(food => food._id === id);
            setFoodData({ ...singleFood });
        }
    }, [userFoods, id]);



    useEffect(() => {
        error && toast.error(error);
    }, [error]);


    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFoodData({ ...foodData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && desc && category && price) {
            const updatedFoodData = { ...foodData, creator: user?.result?.email };

            if (!id) {
                dispatch(addFood({ updatedFoodData, navigate, toast }));
            }
            else {
                dispatch(updateFood({ id, updatedFoodData, navigate, toast }));
            }
            handleClear();
        }
    };

    const handleClear = () => {
        setFoodData({ title: "", desc: "", price: "", category: "" });
    };

    return (
        <div className='w-50 mx-auto my-5'>
            <h5 className='mb-4'>{id ? "Update Food" : "Add Food"}</h5>
            <form onSubmit={handleSubmit} className=' border rounded p-3'>
                <div className="form_group">
                    <input
                        type="text"
                        placeholder='Title'
                        value={title || ""}
                        name="title"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form_group">
                    <input
                        type="text"
                        placeholder='Category'
                        value={category || ""}
                        name="category"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-lg-6 form_group'>
                        <input
                            type="number"
                            placeholder='Price'
                            value={price || ""}
                            name="price"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <FileBase64
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                setFoodData({ ...foodData, imageFile: base64 })
                            }
                        />
                    </div>
                </div>
                <div className="form_group">
                    <textarea
                        rows={3}
                        type="text"
                        placeholder='Description'
                        value={desc || ""}
                        name="desc"
                        onChange={onInputChange}
                        required
                    />
                </div>
                {loading ? <Spinner animation="border" variant="warning" /> : <button className="logout_btn">{id ? "Update Food" : "Add Food"}</button>}
            </form>
        </div>
    );
};

export default AddEditFood;