import axios from "axios";

const API = axios.create({ baseURL: "https://pacific-falls-28087.herokuapp.com" });


export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
export const makeAdmin = (emailId) => API.put("/users/makeAdmin", emailId);

export const addFood = (foodData) => API.post("/foods", foodData);
export const getFoods = () => API.get("/foods");
export const getFood = (id) => API.get(`/foods/${id}`);

export const getFoodsByUser = (userEmail) => API.get(`/foods/userFoods/${userEmail}`);

export const deleteFood = (id) => API.delete(`/foods/${id}`);
export const updateFood = (updatedFoodData, id) =>
    API.patch(`/foods/${id}`, updatedFoodData);

