import React from 'react'
import Banner from '../components/Banner'
import ContainerServices from '../components/ContainerServices'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import foto9 from '../galeria-fotos/foto-9.png'

const Services = () => {
    return (
        <>
            <Navbar />
            <Banner />

            <ContainerServices
                direction='left'
                foto={foto9}
                title='Serviços utilitários'
                text='ekfwef ewfjweoijfjowe wefjewijfjowef wefjewifojwie' />

            <ContainerServices
                foto={foto9}
                title='Serviços utilitários'
                text='ekfwef ewfjweoijfjowe wefjewijfjowef wefjewifojwie' />

            <ContainerServices
                direction='left'
                foto={foto9}
                title='Serviços utilitários'
                text='ekfwef ewfjweoijfjowe wefjewijfjowef wefjewifojwie' />

            <ContainerServices
                foto={foto9}
                title='Serviços utilitários'
                text='ekfwef ewfjweoijfjowe wefjewijfjowef wefjewifojwie' />

            <Footer />
        </>
    )
}

export default Services