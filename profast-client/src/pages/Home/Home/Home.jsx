import React from 'react'
import Banner from '../Banner/Banner'
import Services from '../services/Services'
import ClientLogosMarquee from '../clientLogosMarquee/ClientLogosMarquee'


const Home = () => {
  return (
    <div>
        <h2>
          <Banner />
          <Services />
          <ClientLogosMarquee />
        </h2>
    </div>
  )
}

export default Home