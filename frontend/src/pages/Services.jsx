import React from 'react'
import Banner from '../components/Banner'
import ContactZone from '../components/ContactZone'
import ContainerServices from '../components/ContainerServices'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import foto9 from '../galeria-fotos/foto-9.png'
import imgBanner from '../imgs/banner.png'
import imgLogo from '../imgs/logo_marcio.png'

const Services = () => {
    return (
        <>
            <Navbar imgLogo={imgLogo} />
            <Banner imgBack={imgBanner} />
            <div className='py-3'>
                <ContainerServices
                    photoLeft={foto9}
                    titleLeft='Veiulos Pesados'
                    textLeft='Trabalhamos com veiculos capacitados e uma equipe treinada, capazes de transportar veiculos pesados como: onibûs, micro-onibûs, caminhões, caminhonetes, carretas e etc.'
                    photoRight={foto9}
                    titleRight='Vans'
                    textRight='Trabalhamos com veiculos capacitados e uma equipe treinada, capazes de transportar vans e diversos outros veiculos de transportes coletivos.'
                />
                <ContainerServices
                    photoLeft={foto9}
                    titleLeft='Auxiliar na Partida'
                    textLeft='Seu carro desligou? Nossa equipe é formada por profissionais sempre a postos, com o preparo para auxiliar nos demais problemas elétricos do seu veiculo.'
                    photoRight={foto9}
                    titleRight='Utilitários'
                    textRight='Trabalhamos com veiculos capacitados e uma equipe treinada, capazes de transportar veiculos utilitários como: caminhões, caminhonetes e pickups.'
                />
                <ContainerServices
                    photoLeft={foto9}
                    titleLeft='Troca de Pneus'
                    textLeft='Seu pneu furou? Fique Tranquilo! Nossa equipe é formada por profissionais sempre a postos, com o preparo para auxiliar na entrega e troca de um novo pneu.'
                    photoRight={foto9}
                    titleRight='Motos'
                    textRight='Trabalhamos com veiculos capacitados e uma equipe treinada, capazes de transportar motos de todos os tamanhos e cilindradas.'
                />
                <ContainerServices
                    photoLeft={foto9}
                    titleLeft='Guincho para equipamentos'
                    textLeft='Trabalhamos com veiculos capacitados e uma equipe treinada, capazes de transportar os mais variados equipamentos como: empilhadeiras, food-trucks, maquinário de obra, motores e os mais diversos tipos de equipamentos.'
                    photoRight={foto9}
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
