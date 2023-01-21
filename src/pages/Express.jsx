import React from 'react'
import Banner from '../components/Banner'
import ContactZone from '../components/ContactZone'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import imgBanner from '../imgs/banner_express.jpg'
import ContainerServices from '../components/ContainerServices'
import imgLogo from '../imgs/logo_express.png'

// Media Services
import foto1 from '../galeria-fotos-express/foto-1.jpg'
import foto2 from '../galeria-fotos-express/foto-2.jpg'
import foto3 from '../galeria-fotos-express/foto-3.jpg'
import foto5 from '../galeria-fotos-express/foto-5.jpg'
import foto6 from '../galeria-fotos-express/foto-6.jpg'
import foto7 from '../galeria-fotos-express/foto-7.jpg'

const Express = () => {
  return (
    <>
      <Navbar imgLogo={imgLogo} />
      <Banner imgBack={imgBanner} express={true} />
      <div className='py-md-3'>
        <ContainerServices
          photoLeft={foto2}
          titleLeft='Retirada de Residuos'
          textLeft='Temos experiencia na retirada de residuos, desde uma tranportes de equipamentos até remoção de coleta seletiva em comercios, residencias e condominios.'
          photoRight={foto5}
          titleRight='Entrega de Materiais'
          textRight='Entregamos os mais diversos materias com a segurança e rapidez que nossos clientes desejam, sempre prezando pela segurança dos objetos.'/>
        <ContainerServices
          photoLeft={foto3}
          titleLeft='Fretes Terceirizados'
          textLeft='Há mais de 15 anos no ramo, temos uma variada capacidade e treinamento com fretes, nossso motorista possuem treinamento e o equipamento nescessário para o transporte dos mais diversos materiais: ceramica, materias de obra, eletrodomésticos, moveis planejados e muito mais.'
          photoRight={foto6}
          titleRight='Retirada de Podas'
          textRight='Após podar sua árvore precisa de um descarte, correto? trabalhando junto a uma equipe especializada fazemos a limpeza do ambiente de trabalho logo após o serviço de podagem ser finalizado.'
        />
        <ContainerServices
          photoLeft={foto1}
          titleLeft='Auxilio em Obras'
          textLeft='Quando finalizar sua obra, fique tranquilo, nós da Md Guincho resolvemos o resto. Nosso serviço incluem: a retirada de entulho, limpeza após o encerramento da atividade, derrubagem de parede para inicio de obras e etc.'
          photoRight={foto7}
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
