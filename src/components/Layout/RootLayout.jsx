import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GoTopButton from "./GoTopButton";
import Header from "./Header";
import Navbar from "./Navbar";

const RootLayout = () => {
  let [navScroll, setNavScroll] = useState(false)
  let [navTop,setNavtop] = useState(false)
  // let [oldScroll, setOldScroll] = useState('')

  useEffect(() => {
    
    
    let oldScroll = 0
    window.addEventListener("scroll", (e) => {
    window.pageYOffset > oldScroll ?  setNavScroll(true) : setNavScroll(false)
      oldScroll = window.pageYOffset
      window.pageYOffset === 0 ? setNavtop(true) : setNavtop(false)
    

  })
    
  },[])
   
  return (
    <>
      <div id="nav-wrapper" className={` ${navTop ? "nav-not-fixed" : ""} ${navScroll && "up" }   duration-500`}>
        <Navbar />
      <Header />
      </div>
      <GoTopButton/>
      
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
