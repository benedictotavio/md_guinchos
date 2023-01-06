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
          textLeft='Temos experiencia na retirada de residuos, desde uma tranportes de equipamentos até remoção de coleta seletiva em comercios, residencias e condominios.'
          photoRight={foto9}
          titleRight='Entrega de Materiais'
          textRight='O ideal é que façamos testes específicos de texto para avaliar a clareza dos nossos conteúdos, mas sejamos realistas, vai. É fato que, às vezes, não temos verba ou tempo suficiente pra testarmos dessa forma. Por isso, sempre que for possível, é bom pegar carona nos testes de usabilidade (que são mais comuns nas empresas).'
        />
        <ContainerServices
          photoLeft={foto9}
          titleLeft='Fretes Terceirizados'
          textLeft='Há mais de 15 anos no ramo, temos uma variada capacidade e treinamento com fretes, nossso motorista possuem treinamento e o equipamento nescessário para o transporte dos mais diversos materiais: ceramica, materias de obra, eletrodomésticos, moveis planejados e muito mais.'
          photoRight={foto9}
          titleRight='Retirada de Podas'
          textRight='Após podar sua árvore precisa de um descarte, correto? trabalhando junto a uma equipe especializada fazemos a limpeza do ambiente de trabalho logo após o serviço de podagem ser finalizado.'
        />
        <ContainerServices
          photoLeft={foto9}
          titleLeft='Auxilio em Obras'
          textLeft='Quando finalizar sua obra, fique tranquilo, nós da Md Guincho resolvemos o resto. Nosso serviço incluem: a retirada de entulho, limpeza após o encerramento da atividade, derrubagem de parede para inicio de obras e etc.'
          photoRight={foto9}
          titleRight='Mudanças'
          textRight='Atrás de novos ares? A Md Guincho te ajuda com isso. Trabalhamos com caminhões altamente preparados e profissionais experientes, para transportar seus pertences com todo a qualidade e cuidade que eles merecem.'
        />
      </div>
      <ContactZone />
      <Footer />
    </>
  )
}

export default Express
