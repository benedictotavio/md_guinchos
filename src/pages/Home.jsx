import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import MyMap from '../components/MyMap'
import ContactZone from '../components/ContactZone'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Carrousel/>
        <MyMap/>
        <ContactZone/>
        <Footer/>
    </div>
  )
}

export default Home