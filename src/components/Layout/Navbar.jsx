import React, { useState, useEffect } from "react";
import Images from "./Images";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Container from "./Container";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    let scrollWidt = (e) => {
      if (window.innerWidth <= 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    scrollWidt();
    window.addEventListener("resize", scrollWidt);
  }, []);

  return (
    <>
      <nav className="bg-white ">
        <Container>
          <Flex className="lg:flex justify-between  ">
            <div className="w-[20%] ">
              <Images
                className="w-[100%] md:w-[50%] lg:w-[60%] "
                imgsrc="../src/assets/images/logo.png"
              />
            </div>

            <div className="w-full md:w-full lg:w-[60%] lg:flex lg:justify-end md:justify-end items-center ">
              <HiOutlineBars3BottomRight
                className="ml-auto  text-[25px] lg:text-[30px] lg:hidden absolute top-2.5 right-2.5"
                onClick={() => setShow(!show)}
              />
              {show && (
                <List className="lg:flex items-center text-center lg:justify-end lg:gap-x-10 font-nunito text-base font-semibold mt-5 lg:mt-0">
                  <ListItem
                    className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 my-2.5 lg:my-0 "
                    item="Home"
                  />
                  <ListItem
                    className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 my-2.5 lg:my-0"
                    item="About"
                  />
                  <ListItem
                    className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 my-2.5 lg:my-0"
                    item="Service"
                  />
                  <ListItem
                    className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 my-2.5 lg:my-0"
                    item="Contact"
                  />
                </List>
              )}
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
