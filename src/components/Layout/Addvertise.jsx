import Container from './Container'
import React from 'react'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import Images from './Images'

const Addvertise = () => {
  return (
    <div className='mt-5 md:mt-[70px] lg:mt-[100px]'>
      <Container>
       <Flex className="flex gap-x-[10px] md:gap-[20px]"> 
         <div className='w-2/4'>
            <Link to="#">
                <Images imgsrc="../src/assets/images/add1.png" className="w-full h-auto"/>
            </Link>
         </div>
         <div className='w-2/4'>
            <Link to="#" className='flex flex-col gap-y-[10px] md:gap-[20px]'>
                      <Images imgsrc="../src/assets/images/add2.png" className="w-full h-auto" />
                        <Images imgsrc="../src/assets/images/add3.png" className="w-full h-auto"/>
            </Link>
         </div>
       </Flex>
    </Container>
    </div>
  )
}

export default Addvertise