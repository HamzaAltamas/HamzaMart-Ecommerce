import React from 'react'
import Slider from 'react-slick'
import Container from './Container'
import Heading from './Heading'
import "slick-carousel/slick/slick.css"; 
import ProductCard from './ProductCard';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="producSlide-next"
      onClick={onClick}
    >
    <FaArrowRight/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="producSlide-prev"
      onClick={onClick}
    ><FaArrowLeft/></div>
  );
}


const NewArrival = () => {
   var settings = {
      infinite: true,
     speed: 500,
     dots:false,
      slidesToShow: 4,
      slidesToScroll: 1,
     initialSlide: 0,
     arrows: true,
       nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
     ]
   }
  return (
      <div className='mt-5 md:mt-[70px] lg:mt-[100px] products-slick'>
        <Container>
        <Heading title="New Arrivals" />  
        <div>
        <div>
        <Slider {...settings}>
          <div>
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={true}    
            />
          </div>
          <div>
            <ProductCard
              image="../src/assets/images/product2.png"   
              badge={false}    
            />
          </div><div>
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}    
            />
          </div><div>
            <ProductCard
              image="../src/assets/images/product2.png"   
              badge={false}    
            />
          </div><div>
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={true}    
            />
          </div><div>
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}    
            />
          </div><div>
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}    
            />
          </div><div>
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={true}    
            />
          </div><div>
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}    
            />
          </div>
        </Slider>
          </div>
        </div>
        </Container>
    </div>
  )
}

export default NewArrival