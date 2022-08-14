import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddAdmin from '../pages/AddAdmin';
import AddFoods from '../pages/AddFoods';
import AllFoods from '../pages/AllFoods';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import EditDeleteFood from '../pages/EditDeleteFood';
import FoodDetails from '../pages/FoodDetails';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ReviewUs from '../pages/ReviewUs';
import AdminRoute from '../redirects/AdminRoute';
import PrivateRoute from '../redirects/PrivateRoute';

const Routers = () => {
    return (
        <div>
            <Routes>

                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/foods' element={<AllFoods />} />
                <Route path='/foods/:id' element={<FoodDetails />} />
                <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
                <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/reviewUs' element={<PrivateRoute><ReviewUs /></PrivateRoute>} />
                <Route path='/addFood' element={<AdminRoute><AddFoods /></AdminRoute>} />
                <Route path='/editDelete' element={<AdminRoute><EditDeleteFood /></AdminRoute>} />
                <Route path='/addAdmin' element={<AdminRoute><AddAdmin /></AdminRoute>} />

            </Routes>
        </div>
    );
};

export default Routers;