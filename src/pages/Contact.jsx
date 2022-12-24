import React from 'react'
import  Navbar  from '../components/Navbar'
import  Banner  from '../components/Banner'
import Footer from '../components/Footer'
import Form from '../components/Form'
import ContactZone from '../components/ContactZone'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Banner/>
       <Form/>
       <ContactZone/>
       <Footer/>
    </div>
  )
}

export default Contact