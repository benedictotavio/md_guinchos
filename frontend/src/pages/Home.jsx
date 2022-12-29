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
        <div>
            <Navbar imgLogo={imgLogo} />
            <Banner imgBack={imgBack} />
            <div className='my-md-3 container text-center'
                style={{ fontFamily: 'Poppins' }}>
                <h1 style={{ fontStyle: 'italic', color: '#75c5fe', textShadow: '1px 1.5px 1px #fe3849' }}>MD Guinchos</h1>
                <p>
                    Nós trabalhamos com foco total, nossos veículos estão sempre revisados para poder atender nossos clientes com 100% de segurança. Apenas um clique para ter contato conosco via WhatsApp ou Chamada.
                </p>
                <div className='mb-lg-5'>
                    <Carrousel />
                </div>
                <p>
                    Nossa equipe está sempre pronta para atender 24 horas por dia e 7 dias da semana, incluindo feriados. Temos uma frota com veículos preparados para socorrer em qualquer situação e em quaisquer circunstâncias e por isso, atendemos o mais rápido possível.
                </p>
            </div>
            <Regions />
            <ContactZone />
            <Footer />
        </div>
    )
}

export default AboutUs