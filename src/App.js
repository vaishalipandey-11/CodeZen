import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home  from "./pages/Home";
// import toast from "react-hot-toast";
import Navbar from "./components/common/Navbar"
// import PrivateRoute from "./components/core/Auth/PrivateRoute";


function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
