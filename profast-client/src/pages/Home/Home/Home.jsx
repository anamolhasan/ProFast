import React from 'react'
import Banner from '../Banner/Banner'
import Services from '../services/Services'
import ClientLogosMarquee from '../clientLogosMarquee/ClientLogosMarquee'
import Benefits from '../Benefits/Benefits'
import BeMerchant from '../BeMerchant/BeMerchant'
import HowItWorks from '../HowItWorks/HowItWorks'


const Home = () => {
  return (
    <div>

          <Banner />
          <HowItWorks />
          <Services />
          <ClientLogosMarquee />
          <Benefits />
          <BeMerchant />
     
    </div>
  )
}

export default Home