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
            <Navbar imgLogo={imgLogo}/>
            <Banner imgBack={imgBanner} />
            <div className='py-3'>
                <ContainerServices
                    photoLeft={foto9}
                    titleLeft='Utilitários'
                    textLeft='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
                    photoRight={foto9}
                    titleRight='Utilitários'
                    textRight='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
                />
                <ContainerServices
                    photoLeft={foto9}
                    titleLeft='Utilitários'
                    textLeft='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
                    photoRight={foto9}
                    titleRight='Utilitários'
                    textRight='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
                />
            </div>
            <ContactZone />
            <Footer />
        </>
    )
}

export default Services