import React, { useEffect, useState } from 'react';
import BreadCrumbBanner from '../components/Layout/BreadCrumbBanner'
import Container from '../components/Layout/Container'
import Flex from '../components/Layout/Flex'
import ReactPaginate from 'react-paginate';
import Pagination from '../components/Layout/Pagination';
import SelectOptionDropdown from '../components/Layout/SelectOptionDropdown';
import LeftSIdebar from '../components/Layout/LeftSIdebar';

const Shop = () => {
  let [showItem,setShowItem]= useState(12)
  return (
    <>
      <Container>
        <BreadCrumbBanner title="Products" />
        <Flex className="flex gap-x-5">
          <div className='w-[25%] '><LeftSIdebar/></div>
          <div className='w-[75%] relative'>
            <Flex className="flex   justify-between px-[10px] gap-x-2">
              
              <SelectOptionDropdown
                dValue="Featured"
                title="Sort by"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </SelectOptionDropdown>
              
               <SelectOptionDropdown
                dValue="12"
                title="Show"
                onChange={(e)=> setShowItem(Number(e.target.value))}
              >
                
                <option value="24">24</option>
                <option value="48">48</option>
             </SelectOptionDropdown>
            
            
           </Flex>

            <Pagination itemsPerPage={showItem} />
         
          </div>
        </Flex>
      </Container>
      
    </>
  )
}

export default Shop