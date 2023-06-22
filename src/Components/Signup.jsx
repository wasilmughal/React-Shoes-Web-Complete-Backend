import React from 'react'
import "./Signup.css";
import { Formik, Form, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../Config/Firebase"
import {getAuth,signInWithPopup ,GoogleAuthProvider , signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup(){

  const provider = new GoogleAuthProvider();
const gauth=()=>{

    const auth1 = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

}

  return (
    <div>
      <Container>
    <Row>
        <Col>
        <Formik
initialValues={{
    email:"",
    psw:"",
    fname:"",
    lname:""

}}
onSubmit={async (value)=>{
    console.log(value)
    
    const auth1=auth

   const user = await createUserWithEmailAndPassword(auth1,value.email,value.psw)
    toast.success("  Successfully Creatad " ,{
autoClose:1000,
position:"top-right"
   });


}}>
    <Form style={{marginTop:"80px"}}>


       		<h1 style={{fontSize:"70px"}}>Create <br /> Account</h1>
               <label for="email"><b>First Name</b></label> 
               <Field type="text" placeholder="First Name" name="fname" required />

        <label for="text"><b>Last Name</b></label>
        <Field type="text" name="lname" placeholder="Last Name" />

        <label for="text"><b>Email</b></label>
        <Field type="text" name="email" placeholder="Email" required />

        <label for="text"><b>Password</b></label>
        <Field type="password" name="psw" placeholder="Password" required />


        <button  class="registerbutton" onClick={()=>gauth()}>Login with Google</button>

		<button type="submit" class="registerbutton">Create Account</button>


        </Form>
        </Formik> 
        
        </Col>
      
    </Row>
    <br /> <br />
</Container>

<Footer/>
<ToastContainer />


    </div>
  )
}

export default Signup
