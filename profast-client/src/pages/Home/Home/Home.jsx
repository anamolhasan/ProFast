import React from 'react'
import Banner from '../Banner/Banner'
import Services from '../services/Services'
import ClientLogosMarquee from '../clientLogosMarquee/ClientLogosMarquee'
import Benefits from '../Benefits/Benefits'


const Home = () => {
  return (
    <div>

          <Banner />
          <Services />
          <ClientLogosMarquee />
          <Benefits />
     
    </div>
  )
}

export default Home