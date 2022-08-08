import Layout from "./components/Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Layout />
    </div>
  );
}

export default App;
