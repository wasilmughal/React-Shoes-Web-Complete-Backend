import React from "react";

import { Route, Routes,  } from "react-router-dom";
import Login from "../Components/Login";
import Service from "../Components/Service";
import Gallery from "../Components/Gallery";
import About from "../Components/About";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Signup from "../Components/Signup";




function Navigation(){
    return(
        <>
        
    <Routes>
        <Route path="gallery" element={<Gallery/>}></Route>
        <Route path="/login" element={<Login/>}>  </Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}> </Route>
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/" element={<Slider/>}> </Route>



        
        <Route path="/login" element={<Login/>}>  </Route>
        <Route path="/signup" element={<Signup/>}>  </Route>

       


        



        </Routes>    
    
        
        </>
    )
}




export default Navigation
