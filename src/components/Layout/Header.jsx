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
      console.log(e.target);
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <>
      <div className=" bg-orange shadow-lg">
        <Container>
          <Flex className="flex justify-between">
            <div>
              <Dorpdown className="hover:text-white " dropef={ref}>
                <p className="flex items-center gap-x-1 duration-500">
                  <HiBars3CenterLeft /> Shop by category
                </p>
                {show && (
                  <List className="absolute duration-500">
                    <ListItem item="HAmza" />

                    <ListItem item="HAmza" />
                    <ListItem item="HAmza" />
                    <ListItem item="HAmza" />
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
