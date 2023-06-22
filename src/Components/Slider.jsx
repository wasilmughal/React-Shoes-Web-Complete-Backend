import React from "react";
import img1 from "../Images/Slider image 1.jpg"
import img2 from "../Images/slider image 2.jpg"
import Carousel from 'react-bootstrap/Carousel';
import img17 from "../Images/17.jpg"
import img20 from "../Images/20.jpg"
import img19 from "../Images/19.jpg"
import img18 from "../Images/18.jpg"
import img01 from "../Images/1.png"
import img02 from "../Images/2.jpg"
import img3 from "../Images/3.png"
import img4 from "../Images/4.png"
import aboutimg from '../Images/About.jpg'
import lastpic from '../Images/LastPic.jpg'

import { BsFillArrowRightCircleFill} from 'react-icons/bs';
import { BsYoutube} from 'react-icons/bs';
import { ImFacebook2} from 'react-icons/im';
import {GrInstagram} from 'react-icons/gr';




import AOS from "aos";
import 'aos/dist/aos.css';
import Footer from "./Footer";





class Slider extends React.Component{
  componentDidMount() {
    AOS.init();
  }
render(){
    return(
        <>

{/* Slider */}
   <Carousel>
      <Carousel.Item  >
        <img style={{maxHeight:"600px"}}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item >
      <Carousel.Item >
        <img style={{maxHeight:"600px"}}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>



{/* Cards second part */}

<div className="container-fluid text-center" style={{backgroundColor:"black",marginTop:"30px"}}>
  <div className="row">
    <h1 style={{textAlign:"center" , fontFamily:"serif" , marginTop:"10px" , color:"gold"}}>SHOP BY CATEGORY</h1>
 
<div className="col" col-lg-3 md-4 sm-6 col-12>
<div data-aos="fade-right">
<img style={{borderRadius:"30px" ,width:"310px"  ,height:"400px"}} src={img17} alt="" />
 </div>
</div>


 <div className="col" col-lg-3 md-4 sm-6 col-12>
 <div data-aos="fade-right">
<img style={{borderRadius:"30px" , width:"310px"  ,  height:"400px"}} src={img20} alt="" />
 </div> </div>


 <div className="col" col-lg-3 md-4 sm-6 col-12>
 <div data-aos="fade-left">

<img style={{borderRadius:"30px" , width:"310px"  , height:"400px"}} src={img19} alt="" />
 </div> </div>


 <div className="col" col-lg-3 md-4 sm-6 col-12>
 <div data-aos="fade-left">

<img style={{borderRadius:"30px" , width:"310px"  , height:"400px"}} src={img18} alt="" />
 </div> </div>
  </div>
  <br /> <br /> 
</div>

{/*  Third Part */}

    <div className="container-fluid text-center" style={{backgroundColor:"whitesmoke"}}>
  <div className="row">
    <h1 style={{textAlign:"center" , fontFamily:"serif" , marginTop:"10px" , color:"black"}}>BEST SELLERS</h1>
   

    <div className="col" col-lg-3 md-4 sm-6 col-12>
    <div class="shadow">
    <div data-aos="flip-up">
<img style={{borderRadius:"10px" , width:"300px"  ,  height:"300px"}} src={img01} alt="" />
 </div> </div>    </div>


 <div className="col" col-lg-3 md-4 sm-6 col-12>
 <div class="shadow  ">
 <div data-aos="flip-up">
<img style={{borderRadius:"10px" , width:"300px"  ,  height:"300px"}} src={img02} alt="" />
 </div> </div> </div>

 <div className="col" col-lg-3 md-4 sm-6 col-12>
 <div class="shadow  ">
 <div data-aos="flip-up">
<img style={{borderRadius:"10px" , width:"300px"  ,  height:"300px"}} src={img3} alt="" />
 </div> </div> </div>

 <div className="col" col-lg-3 md-4 sm-6 col-12>
 <div class="shadow ">
 <div data-aos="flip-up">
<img style={{borderRadius:"10px" , width:"300px"  ,  height:"300px"}} src={img4} alt="" />
 </div> </div> </div>
</div></div>

{/* About Section */}

<div className="container-fluid text-center" style={{backgroundColor:"black",marginTop:"30px"}}>
  <div className="row">
<div className="col" style={{marginTop:"30px"}}>
<h1 style={{color:"gold", fontFamily:"fantasy"}} >ABOUT US</h1>
<p style={{color:"white " , textAlign:"center" }}>
kBH established itself as a trusted source of unique footwear as we proudly announce our products as “Made in Pakistan ''. 
  KBH dedicates itself to quality, unique design, and utmost comfort. Come join the spirit of ultimate
  fashion footwear to indulge yourself with uniqueness & sophistication which is constructed with high-quality craftsmanship.</p>
  <img src={aboutimg} alt="" style={{width:"100%" , borderRadius:"20px"}} />
</div>

  </div>
  <br /> <br />
</div>

{/* forth Part */}
<div className="container-fluid " >
  <div className="row">
    <div className="col" style={{marginTop:"20px" , fontWeight:"bolder"}}>
<img src={lastpic}  style={{width:"100%"}} alt="" />
 </div></div></div>

{/* Footer */}

<Footer/>









        </>
    )
}

}

export default Slider