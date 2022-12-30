import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import Flex from './Flex'
import LeftSideBarItem from './LeftSideBarItem'

const SidebarContent = ({dropDown , title}) => {
    let [drop,setDrop] = useState(dropDown)
    let [show,setShow] = useState(dropDown)
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
                  <LeftSideBarItem subDropDown={true} title="c1" />
                  <LeftSideBarItem title="c1" >
                      <p>dxfsdgfsd</p>
                      <p>dxfsdgfsd</p>
                      <p>dxfsdgfsd</p>
                      <p>dxfsdgfsd</p>
                  </LeftSideBarItem>
                  <LeftSideBarItem title="c1"/>
              
          </div>
              
          }
          {
              !drop &&
              <div>
                <LeftSideBarItem subDropDown={true} title="c1" />
                  <LeftSideBarItem title="c1"/>
                  <LeftSideBarItem title="c1"/>
              </div>
          }
        
          
    </>
  )
}

export default SidebarContent