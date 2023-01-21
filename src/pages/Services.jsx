import React from 'react'
import Banner from '../components/Banner'
import ContactZone from '../components/ContactZone'
import ContainerServices from '../components/ContainerServices'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import imgBanner from '../imgs/banner.png'
import imgLogo from '../imgs/logo_marcio.png'

// Media Galeria

import foto20 from '../galeria-fotos-guincho/foto-20.jpg'
import foto21 from '../galeria-fotos-guincho/foto-21.jpg'
import foto22 from '../galeria-fotos-guincho/foto-22.jpg'
import foto29 from '../galeria-fotos-guincho/foto-29.jpg'
import foto24 from '../galeria-fotos-guincho/foto-24.jpg'


import video2 from '../galeria-fotos-guincho/video_utilitario.mp4'


const Services = () => {
    return (
        <>
            <Navbar imgLogo={imgLogo} />
            <Banner imgBack={imgBanner} />
            <div className='py-3'>
                <ContainerServices
                    photoLeft={foto24}
                    titleLeft='Motos'
                    textLeft='Trabalhamos com veiculos capacitados e uma equipe treinada, utilizando um equipamento potente somos capazes de transportar motos de todos os tamanhos e cilindradas.'
                    photoRight={foto21}
                    titleRight='Vans'
                    textRight='Trabalhamos com veiculos capacitados e uma equipe treinada, capazes de transportar vans e diversos outros veiculos de transportes coletivos.'
                />
                <ContainerServices
                    photoLeft={foto29}
                    titleLeft='Auxiliar na Partida'
                    textLeft='Seu carro desligou? Nossa equipe é formada por profissionais sempre a postos, com o preparo para auxiliar nos demais problemas elétricos do seu veiculo.'
                    videoRight={video2}
                    titleRight='Veiculos Utilitários'
                    textRight='Trabalhamos com veiculos capacitados e uma equipe treinada, capazes de transportar veiculos utilitários leves e pesados como: caminhões, caminhonetes e pickups.'
                />
                <ContainerServices
                    photoLeft={foto20}
                    titleLeft='Guincho para equipamentos'
                    textLeft='Trabalhamos com veiculos capacitados e uma equipe treinada, capazes de transportar os mais variados equipamentos como: empilhadeiras, food-trucks, maquinário de obra, motores e os mais diversos tipos de equipamentos.'
                    photoRight={foto22}
                    titleRight='Guincho para automóveis'
                    textRight='A Md Guincho está sempre preparada para auxiliar com o seu problema, nossa equipe esta em constante comunicação que permite um rapido contato e um atendimento ainda mais agíl.'
                />
            </div>
            <ContactZone />
            <Footer />
        </>
    )
}

export default Services
