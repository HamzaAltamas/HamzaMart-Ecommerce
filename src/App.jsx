import React, { useEffect, useState } from "react";
import Images from "./components/Layout/Images";
import Flex from "./components/Layout/Flex";
import List from "./components/Layout/List";
import ListItem from "./components/Layout/ListItem";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const App = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    if (769 > window.innerWidth) {
      setShow(false);
    }
  }, []);
  let handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <nav>
      <div className="max-w-container  mx-auto px-[10px]  py-[10px] md:py-[15px] lg:py-[15px]">
        <Flex className="flex justify-between items-center">
          <div className="w-[20%]">
            <Images
              className="w-[100%] md:w-[50%] lg:w-[60%] "
              imgsrc="../src/assets/images/logo.png"
            />
          </div>

          <div className="w-[60%] lg:flex lg:justify-end md:justify-end items-center relative">
            <HiOutlineBars3BottomRight
              className="ml-auto  text-[20px] lg:hidden"
              onClick={handleClick}
            />
            {show && (
              <List className="lg:flex text-center justify-end gap-x-10 font-nunito text-base font-semibold">
                <ListItem
                  className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 "
                  item="Home"
                />
                <ListItem
                  className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 "
                  item="About"
                />
                <ListItem
                  className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 "
                  item="Service"
                />
                <ListItem
                  className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 "
                  item="Contact"
                />
              </List>
            )}
          </div>
        </Flex>
      </div>
    </nav>
  );
};

export default App;
