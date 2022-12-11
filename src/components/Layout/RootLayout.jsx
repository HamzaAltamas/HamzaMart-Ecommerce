import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const RootLayout = () => {
  let [navScroll, setNavScroll] = useState(false)
  // let [oldScroll, setOldScroll] = useState('')

  useEffect(() => {
    let oldScroll = 0
    window.addEventListener("scroll", (e) => {
    window.pageYOffset > oldScroll ?  setNavScroll(true) : setNavScroll(false)
    oldScroll = window.pageYOffset
  })
     
  },[])
   
  return (
    <>
      <div className={`nav-wrapper ${navScroll ? "up" : "down"}`}>
        <Navbar />
      <Header />
      </div>
      
      <Outlet/>
    </>
  );
};

export default RootLayout;
