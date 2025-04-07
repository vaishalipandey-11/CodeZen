import { Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import UpdatePassword from "./pages/UpdatePassword";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Error from "./pages/Error"
import About from "./pages/About";




// import { useNavigate } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"


function App() {

  
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <Home/>
          }></Route>

        <Route path="about" element={
                    <About />         
                }
          />     

       <Route path="forgot-password" element={
          <OpenRoute>
            <ForgotPassword/>
            </OpenRoute>}
          />

        <Route path="signup" element={
              <OpenRoute>
                <Signup/>
              </OpenRoute>
            } />

        <Route path="login" element={
              <OpenRoute>
                <Login/>
              </OpenRoute>
            } />

        <Route path="update-password/:id"
              element={
                <OpenRoute>
                  <UpdatePassword />
                </OpenRoute>
              }/>  

        <Route
              path="verify-email"
              element={
                <OpenRoute>
                  <VerifyEmail />
                </OpenRoute>
              }
             />  
 
          <Route path="*" element=
          {<Error />} 
          />
        
      </Routes>
    </div>
  );
}

export default App;
