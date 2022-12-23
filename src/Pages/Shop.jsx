import React, { useEffect, useState } from 'react';
import BreadCrumbBanner from '../components/Layout/BreadCrumbBanner'
import Container from '../components/Layout/Container'
import Flex from '../components/Layout/Flex'
import ReactPaginate from 'react-paginate';
import Pagination from '../components/Layout/Pagination';

const Shop = () => {

  return (
    <>
      <Container>
        <BreadCrumbBanner title="Products" />
        <Flex className="flex gap-x-5">
          <div className='w-[25%] bg-red-600'>gsh</div>
          <div className='w-[75%] relative'>
            <Pagination itemsPerPage={12} />
         
          </div>
        </Flex>
      </Container>
      
    </>
  )
}

export default Shop