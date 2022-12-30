import React from 'react'
import SidebarContent from './SidebarContent'

const LeftSIdebar = () => {
  return (
      <div>
          <SidebarContent dropDown={true} title="  Shop by category" />
          <SidebarContent  title="  Shop by category"/>
          <SidebarContent dropDown={true}  title="  Shop by category"/>
      </div>
  )
}

export default LeftSIdebar