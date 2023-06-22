import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBag3Line } from 'react-icons/ri';





class Service extends React.Component{


    render(){
        return(
            <>
            <br /> <br />
   <center> <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Show Your Cart</button> </center>
   <br /> <br />    <br />
<div className="d-flex" style={{alignContent:"center"  ,justifyContent:"center"}}>
<center>
<b>Your Cart is Empty</b><br /> <br />
<Link to={"/"}><button type="button" class="btn btn-outline-dark">Continue Shopping</button></Link>
 <br /> <br /><br />
<b>Have an Account? <br /> <br />
<Link to={"/login"} > Login </Link> 
 to Check out Faster
</b>
</center>
</div>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel"> Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   <center>
   <b style={{color:"gray"}} > <RiShoppingBag3Line style={{fontSize:"50px",marginTop:"200px"}}/> <br />
    Your Cart is Empty</b>
    </center> 
  </div>
</div>
            </>
        )
    }
}


export default Service