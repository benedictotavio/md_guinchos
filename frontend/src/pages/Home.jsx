import React from 'react'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import ContactZone from '../components/ContactZone'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Regions from '../components/Regions'
import imgBack from '../imgs/banner.png'
import imgLogo from '../imgs/logo_marcio.png'


const AboutUs = () => {
    return (
        <>
            <Navbar imgLogo={imgLogo} />
            <div className='bg-dark'>
                <Banner imgBack={imgBack} />
                <div className='bg-dark text-white container text-center'
                    style={{ fontFamily: 'Poppins', minHeight: '50vw' }}>
                    <h1 style={{
                        fontStyle: 'italic',
                        color: '#fe3849',
                        textShadow: '1px 1.5px 1px black'
                    }}>MD Guincho</h1>
                    <p>
                        Nós trabalhamos com foco total, nossos veículos estão sempre revisados para poder atender nossos clientes com 100% de segurança. Para entar em contato basta um  <a href="http://wa.me/5511971181829" target='_blank' rel='noreferrer'>clique</a>.
                    </p>
                    <Carrousel />
                </div>
                <Regions />
                <ContactZone />
                <Footer />
            </div>
        </>
    )
}

export default AboutUs