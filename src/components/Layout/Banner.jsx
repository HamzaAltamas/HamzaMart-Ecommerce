import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from './Images';
import { Link, redirect } from 'react-router-dom';

const Banner = () => {
let [dotActive,setDotActive] = useState(0)
   let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
       pauseOnHover: true,
     arrows: true,
       beforeChange: (prev, next) => {
    setDotActive(next);
  },
        appendDots: dots => (
        <div>
          <ul style={{ display:"block"}}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={
            i === dotActive ?
              {
              fontFamily: "'Nunito', sans-serif",
              width: "30px",
            color: "black",
            borderRight: "3px black solid",
            padding: "15px 15px 15px 0",
                position: "absolute",
                fontWeight: "bold",
                color: "black",
           
        }
          :
              {
                fontFamily: "'Nunito', sans-serif",
                width:"30px",
                color: "black",
            borderRight: "3px white solid",
            padding: "15px 15px 15px 0",
                position: "absolute",
                fontWeight: "bold",
                color: "transparent",
              fontWeight:"bold",
              }}
        
        >
          0{i + 1}
        </div>
      )
    };

    
  return (
      <>
       <div className='h-[1000px]'>
        <Slider  {...settings}>
          <Link>
           <div><Images className="w-full h-auto" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          <div>
           <Link>
           <div><Images className="w-full h-auto" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          </div>
          <div>
             <Link>
           <div><Images className="w-full h-auto" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          </div>
          <div>
             <Link>
           <div><Images className="w-full h-auto" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          </div>
          <div>
             <Link>
           <div><Images className="w-full h-auto" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          </div>
          <div>
             <Link>
           <div><Images className="w-full h-auto" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Banner