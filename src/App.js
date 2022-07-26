import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import { auth } from "./firebase/firebase";
import { setLogIn, setLogOut } from "./store/authentication/userSlice";

function App() {
  const authDispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authDispatch(setLogIn({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
      } else {
        authDispatch(setLogOut({
          name: null,
          email: null,
          photo: null
        }))
      }
    })

  }, [])

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
