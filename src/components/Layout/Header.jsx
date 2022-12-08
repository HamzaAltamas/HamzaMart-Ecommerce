import React, { useEffect, useState, useRef } from "react";
import Container from "./Container";
import Dorpdown from "./Dorpdown";
import Flex from "./Flex";
import { HiBars3CenterLeft } from "react-icons/hi2";
import ListItem from "./ListItem";
import List from "./List";

const Header = () => {
  let [show, setShow] = useState(false);
  let ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(e.target);
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <>
      <div className=" bg-orange shadow-lg ">
        <Container>
          <Flex className="flex justify-between">
            <div>
              <Dorpdown dropef={ref} className="relative">
                <p className="flex items-center gap-x-1  duration-500">
                  <HiBars3CenterLeft /> Shop by category
                </p>
                {show && (
                  <List className="absolute w-[263px] bg-white shadow-lg rounded-md top-7">
                    <ListItem
                      item="Accesorries"
                      className="py-[15px]  px-[21px] border-b border-solid border-[#d1d1d1]  hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Furniture"
                      className="py-[15px] hover:font-semibold px-[21px] border-b border-solid border-[#d1d1d1] hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Electronics"
                      className="py-[15px] px-[21px]  border-b border-solid border-[#d1d1d1] hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Clothes"
                      className="py-[15px] px-[21px] border-b border-solid border-[#d1d1d1]
                      hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Bags"
                      className="py-[15px] px-[21px] border-b border-solid border-[#d1d1d1]
                      hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Home appliances"
                      className="py-[15px] px-[21px] hover:text-orange duration-200 hover:pl-[40px]"
                    />
                  </List>
                )}
              </Dorpdown>
            </div>
            <h1>hamza</h1>
            <h1>hamza</h1>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
