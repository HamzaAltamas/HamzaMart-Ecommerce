import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from './Images';
import { Link } from 'react-router-dom';

const Banner = () => {

   let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
       pauseOnHover: true,
       arrows: true,
    //     appendDots: dots => (
    //     <div
    //       style={{
    //         padding: "10px"
    //       }}
    //     >
    //       <ul style={{ display:"block"}}> {dots} </ul>
    //     </div>
    //   ),
    //   customPaging: i => (
    //     <div
    //       style={{
    //         width: "30px",
    //         color: "blue",
    //         borderRight: "3px red solid",
    //       }}
    //     >
    //       0{i + 1}
    //     </div>
    //   )
    };

    
  return (
      <>
       <div>
        <Slider {...settings}>
          <Link>
           <div><Images imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          <div>
            <h3>2bdfg</h3>
          </div>
          <div>
            <h3>3bgdb</h3>
          </div>
          <div>
            <h3>4gfbdgggggggggg</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6gfbfgb</h3>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Banner