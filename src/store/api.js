import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// http://localhost:5000
// https://pacific-falls-28087.herokuapp.com

// User Authentication
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
export const makeAdmin = (emailId) => API.put("/users/makeAdmin", emailId);

// Foods data optimization
export const addFood = (foodData) => API.post("/foods", foodData);
export const getFoods = () => API.get("/foods");
export const getFood = (id) => API.get(`/foods/${id}`);

export const getFoodsByUser = (userEmail) => API.get(`/foods/userFoods/${userEmail}`);

export const deleteFood = (id) => API.delete(`/foods/${id}`);
export const updateFood = (updatedFoodData, id) => API.patch(`/foods/${id}`, updatedFoodData);

export const reviewFood = (reviewFoodData, id) => API.put(`/foods/${id}`, reviewFoodData);
export const getReviewsByFood = (id) => API.get(`/foods/review/${id}`);

// Payment system integration
export const getDataForSSL = (customerData) => API.post("/payment/init", customerData);