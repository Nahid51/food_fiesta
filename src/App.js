import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setUser } from "./store/authentication/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, [])

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Layout />
    </div>
  );
}

export default App;
