import React from 'react'
import Banner from '../components/Banner'
import ContactZone from '../components/ContactZone'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import imgBanner from '../imgs/banner_express.png'
import ContainerServices from '../components/ContainerServices'
import foto9 from '../galeria-fotos/foto-9.png'
import imgLogo from '../imgs/logo_express.png'

const Express = () => {
  return (
    <>
      <Navbar imgLogo={imgLogo} />
      <Banner imgBack={imgBanner} express={true} />
      <div className='py-md-3'>
        <ContainerServices
          photoLeft={foto9}
          titleLeft='Retirada de Residuos'
          textLeft='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
          photoRight={foto9}
          titleRight='Entrega de Materiais'
          textRight='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
        />
        <ContainerServices
          photoLeft={foto9}
          titleLeft='Fretes Terceirizados'
          textLeft='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
          photoRight={foto9}
          titleRight='Retirada de Podas'
          textRight='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
        />
        <ContainerServices
          photoLeft={foto9}
          titleLeft='Resto de Obra'
          textLeft='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
          photoRight={foto9}
          titleRight='Mudanças'
          textRight='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
        />
        
      </div>
      <ContactZone />
      <Footer />
    </>
  )
}

export default Express