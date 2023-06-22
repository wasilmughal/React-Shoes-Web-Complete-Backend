import React from "react";
import "./Signup.css";
import { Formik, Form, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Footer from "./Footer";

import {getAuth,signInWithPopup ,GoogleAuthProvider , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Firebase";
import { ToastContainer, toast } from 'react-toastify';




function Login(){

  
    return(
        <>
<Container>
    <Row>
        <Col>
        <Formik
initialValues={{
    email:"",
    psw:"",

}}
onSubmit={async (value)=>{

    console.log(value)
    const auth1 =auth
   const user=await signInWithEmailAndPassword(auth1,value.email,value.psw)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success("Successfully Login",{
            autoClose:1000,
            position:"top-right"
        });


        // ...
      })
      .catch((e) => {

        console.log(e.message)
        if(e.message=="Firebase: Error (auth/user-not-found)."){
             toast.error("Wrong Email Address",{
            autoClose:1000,
            position:"top-right"
        });

        }else if(e.message=="Firebase: Error (auth/wrong-password)."){
            toast.error("Wrong Password",{
                autoClose:1000,
                position:"top-right"
            });
        }else{
            toast.error("First Create Your Account",{
                autoClose:1000,
                position:"top-right"
            });
        }

        // toast.error("First Create Your Account",{
        //     autoClose:1000,
        //     position:"top-right"
        //        });
      });


}}>
    <Form style={{marginTop:"80px"}}>


    <h1 style={{fontSize:"70px"}}>Login</h1>            
       <label for="email"><b>Email</b></label> 
               <Field type="text" placeholder="Enter Your E-mail" name="email" />

        <label for="text"><b>Password</b></label>
        <Field type="password" name="psw" placeholder="Enter Your Password" />

        <Link style={{color:"black"}}> Forget your Password </Link>

		<button type="submit" class="registerbutton">Login</button>


        </Form>
        </Formik> 
        
        </Col>
      
    </Row>
    <br /> <br />
</Container>
       
       <Footer/>
       <ToastContainer />






        </>
    )
}















export default Login



