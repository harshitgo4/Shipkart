import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/service.scss"
import {Carousel} from "react-responsive-carousel"
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";

import { HashLink } from 'react-router-hash-link';
const Service = () => {
  return (
    <div className='Service'>
      <Carousel autoPlay interval={2000} infiniteLoop={true} showIndicators={true} showThumbs={false} showArrows={false} showStatus={true} >
        <div>
        <img className =" cimg"src={img1}  alt="Image1" />
        <p className='legend'>Full Stack</p>
        </div>
        <div>
        <img className =" cimg" src={img2}  alt="Imag2" />
        <p className='legend'>Networking </p>
        </div>
      
      </Carousel>
      <div className='notfind'>
            <h1>Didn't found the Skill you Need  </h1>
            <HashLink  to="/contact"><p>Contact Us</p> </HashLink>
        </div>
    </div>
  )
}

export default Service
