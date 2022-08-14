import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
            }`;
    }
    return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
export const makeAdmin = (emailId) => API.put("/users/makeAdmin", emailId);

export const addFood = (foodData) => API.post("/foods", foodData);
export const getTours = () => API.get("/foods");
export const getTour = (id) => API.get(`/foods/${id}`);
export const deleteTour = (id) => API.delete(`/foods/${id}`);
export const updateTour = (updatedTourData, id) =>
    API.patch(`/foods/${id}`, updatedTourData);
export const getToursByUser = (userId) => API.get(`/foods/userTours/${userId}`);
