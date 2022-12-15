import React from 'react'

const Heading = ({title}) => {
  return (
      <div className='p-[5px] md:p-[7px] lg:p-[10px]  bg-orange inline-block relative after:absolute after:content-[""] after:h-[100%] after:w-[2px]  after:bg-orange after:top-[0px] after:right-[-3%] 
    
      '>
          <h2 className='text-white font-nunito font-bold text-[15px] md:text-[30px] lg:text-[39px]'>{ title}</h2>
    </div>
  )
}

export default Heading