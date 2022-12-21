import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import MyMap from '../components/MyMap'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Carrousel/>
        <MyMap/>
        <Footer/>
    </div>
  )
}

export default Home