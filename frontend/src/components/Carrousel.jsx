import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Logo from '../imgs/logo_marcio.png'
import Logo2 from '../imgs/logo_express.png'
import img15 from '../galeria-fotos/foto-15.png'
import img9 from '../galeria-fotos/foto-9.png'
import img10 from '../galeria-fotos/foto-10.png'
import img19 from '../galeria-fotos/foto-19.jpeg'
import './Carrousel.css'

const Carrousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards-wrapper">
                            <div className="card">
                                <div className="image-wrapper  d-flex justify-content-center align-items-center">
                                    <img src={Logo2} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Marcio Express</h5>
                                    <p className="card-text">Conheça nossos serviços de transportes de cargas e fretes.</p>
                                    <Link to='/express' className="btn btn-primary">
                                        Conhecer <AiOutlineArrowRight />
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-wrapper">
                                    <img src={img15} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">24 Horas</h5>
                                    <p className="card-text">Sempre alerta!
                                        Sempre que precisar, pode contar conosco.
                                        Atendemos 24 horas por dia!.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-wrapper">
                                    <img src={img10} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Solicite orçamento</h5>
                                    <p className="card-text">Diga-nos o que precisa, que nos resolvemos!</p>
                                    <Link to='/contact' className="btn btn-primary">
                                        Fale Conosco
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="cards-wrapper">
                            <div className="card">
                                <div className="image-wrapper">
                                    <img src={img9} alt="..." />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">Pronto Atendimento</h5>
                                    <p className="card-text">Atuamos em Osasco e região metropolitana de São Paulo 24 horas por dia.</p>
                                    <a href="http://wa.me/5511971181829" rel='noreferrer' target='_blank' className="btn btn-primary">
                                        Solicitar guincho!
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-wrapper">
                                    <img src={img19} alt="..." />

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Agilidade</h5>
                                    <p className="card-text">Temos parceiros agregados em toda a região de São Paulo. Entre em contato conosco e contrate um guincho sem burocracia!</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-wrapper d-flex justify-content-center align-items-center">
                                    <img src={Logo} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">MD Guinchos</h5>
                                    <p className="card-text">Venha conhecer todos os nossos serviços.</p>
                                    <Link to='/services' className="btn btn-primary">
                                        Ver serviços <AiOutlineArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carrousel