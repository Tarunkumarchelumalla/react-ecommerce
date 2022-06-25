import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import{Route,Router,Routes} from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <>
 
      <div >
   
      <Routes>
        <Route path="/" element={ <Signup/> } />
        <Route path="/Login" element={ <Login/> } />
     
        <Route path="/Home" element={ <Home/> } />

      </Routes>
    
        </div>
       
        </>
  );
}

export default App;
