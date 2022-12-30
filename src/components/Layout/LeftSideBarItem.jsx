import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const LeftSideBarItem = ({subDropDown,title,children}) => {
      let [drop,setDrop] = useState(subDropDown)
    let [show,setShow] = useState(false)
  return (
      <>
          {
              drop ?
                  <div onClick={()=>setShow((prev)=>!prev)} className="flex items-center justify-between cursor-pointer">
              <h3>
                {title}
              </h3>
              <AiFillCaretDown/>
                  </div>
                  :
                   <h3 className='cursor-pointer'>
                  {title}
              </h3>
          }
          {show && 
            <div>
                  {children}
              
          </div>
              
          }
          
        
    </>
  )
}

export default LeftSideBarItem