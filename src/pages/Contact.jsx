import React from 'react'
import  Navbar  from '../components/Navbar'
import  Banner  from '../components/Banner'
import Footer from '../components/Footer'
import Form from '../components/Form'
import ContactZone from '../components/ContactZone'
import imgBanner from '../imgs/banner.png'
import imgLogo from '../imgs/logo_marcio.png'


const Contact = () => {
  return (
    <div>
       <Navbar imgLogo={imgLogo}/>
       <Banner imgBack={imgBanner}/>
       <Form/>
       <ContactZone/>
       <Footer form='hidden'/>
    </div>
  )
}

export default Contact