import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ban1 from "../assets/ban1.png";
import ban2 from "../assets/ban2.png";


export const Slider= () => {

   const image1 = "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-c0af6629-240e-4b16-a444-d4d7b7eaa90b.jpg";
   const image2 = "https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-5ff8da00-62f0-4e6d-83fc-c7cec169b4c6.jpg";
   
   const styles = {
       images:{
           width: "100%"
       }
   }
    return(
        <AwesomeSlider className="slider">
        <div data-src={ban1} style={styles.images}/>
        <div data-src={ban2} style={styles.images}/>
        <div data-src={image2} style={styles.images}/>
       </AwesomeSlider>        
    )
}
