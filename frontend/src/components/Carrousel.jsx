import React from 'react'
import Logo from '../imgs/logo_marcio.png'
import Logo2 from '../imgs/logo_express.png'
import './Carrousel.scss'

const Carrousel = () => {
    return (
        <section id='section-carrousel'>
            <div className="container">
                <div className="carousel">
                    <div className="carousel__face img-fluid"><span>Segurança</span></div>
                    <div className="carousel__face img-fluid"><span>Agilidade</span></div>
                    <div className="carousel__face img-fluid"><span>Eficiencia</span></div>
                    <div className="carousel__face img-fluid d-flex justify-content-center align-items-center">
                        <i><img className='img-fluid' src={Logo} alt="" /></i>
                    </div>
                    <div className="carousel__face img-fluid"><span>Disponibilidade</span></div>
                    <div className="carousel__face img-fluid"><span>24 Horas</span></div>
                    <div className="carousel__face img-fluid"><span>Todos os Dias</span></div>
                    <div className="carousel__face img-fluid"><span>Pronto Atendimento</span></div>
                    <div className="carousel__face img-fluid d-flex justify-content-center align-items-center">
                        <i>
                            <img className='img-fluid' src={Logo2} alt="" />
                        </i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carrousel