import React from 'react'
import AdditionalInfo from '../components/Layout/AdditionalInfo'
import Addvertise from '../components/Layout/Addvertise'
import Banner from '../components/Layout/Banner'
import BestSeller from '../components/Layout/BestSeller'
import NewArrival from '../components/Layout/NewArrival'

const Home = () => {
  return (
      <>
      <Banner />
      <AdditionalInfo />
      <Addvertise />
      <NewArrival />
      <BestSeller/>
      </>
  )
}

export default Home