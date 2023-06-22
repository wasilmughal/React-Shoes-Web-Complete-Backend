import React from 'react'
import { BsFillArrowRightCircleFill} from 'react-icons/bs';
import { BsYoutube} from 'react-icons/bs';
import { ImFacebook2} from 'react-icons/im';
import {GrInstagram} from 'react-icons/gr';


function Footer() {
  return (
    <>
      <div className='container-fluid' style={{ backgroundColor: "black" }}>
<div className="row">
  <div className="col">
  <br /> <br /> <br />
  <h1 style={{color:"white" , display:"inline" , textAlign:"left"}}>SMART STYLING <br /> EXTRA COMFORT.</h1>
  </div>
  <div className="col">
  <br /> <br /> <br />
  <div>
  <input type="text" style={{border:"bottom 5px solid black"}} placeholder='YOUR EMAIL' />
<BsFillArrowRightCircleFill style={{position:"absolute"  ,marginLeft:"-50px" ,marginTop:"12px"  ,fontSize:"30px"  ,color:"black"}}/>
  </div></div></div>
        <div style={{display:"inline"}}>
          <br /> <br /> <br />
          <ul style={{listStyle:"none",gap:"70px"     , display:"inline-flex" , color:"white"}}>
            <li>Login</li>
            <li>Cart</li>
            <li>Track Your Order</li>
          </ul>

<b style={{color:"white", fontSize:"20px" , marginLeft:"60%"}}>
<i><ImFacebook2/> &ensp;  &ensp;
<GrInstagram/>  &ensp;  &ensp;
<BsYoutube/></i>
</b>
        </div>
        <div className="col" style={{borderTop:"gray 1px solid", borderBottom:"gray 1px solid"}} >
  <ul style={{listStyle:"none",marginTop:"30px"  ,color:"white",gap:"70px" , display:"inline-flex"}}>
    <li>About Us</li>
    <li>Policies</li>
    <li>Contact Us</li>
    <li>FAQS</li>
    <li>Store Locator</li>
    <li>Careers</li>
    <li>Load Book</li>
    <li>Blog</li>
  </ul>

</div>

<div className="col">
  <br /> <br /> <br />
<h5 style={{color:'white'}}>KBH@gmail.com
<br /> <br />
Inquiry Call +92-00-0000

<br /> <br /> <br />
</h5>
<h6 style={{color:"gray"}}>2023 KBH | All Right Reserved
</h6>

</div>

 <br />
      </div>




    </>
  )
}

export default Footer
