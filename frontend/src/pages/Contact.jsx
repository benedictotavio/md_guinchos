import React from 'react'
import  Navbar  from '../components/Navbar'
import  Banner  from '../components/Banner'
import Footer from '../components/Footer'
import Form from '../components/Form'
import ContactZone from '../components/ContactZone'
import imgBanner from '../imgs/banner.png'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Banner imgBack={imgBanner}/>
       <Form/>
       <ContactZone/>
       <Footer form='hidden'/>
    </div>
  )
}

export default Contact