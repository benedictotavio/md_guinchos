import React from 'react'
import './ContainerServices.scss'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContainerServices = ({ photoLeft, titleLeft, textLeft, photoRight, titleRight, textRight, videoLeft, videoRight }) => {
    return (
        <>
            <section id='container-services'>
                <div className="container">
                    <article className="postcard light blue">
                        <a className="postcard__img_link">
                            {photoLeft && <img className='img-fluid' src={photoLeft} alt="" />}
                            {videoLeft && <video width='100%' height='100%' src={videoLeft} autoPlay={true} muted loop></video>}
                        </a>
                        <div className="postcard__text t-dark">
                            <h1 className="postcard__title blue">{titleLeft}</h1>
                            <div className="postcard__subtitle small">

                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{textLeft}</div>
                            <ul className="postcard__tagbox">
                                <a href="http://wa.me/5511971181829" target='_blank'>
                                    <li className="tag__item_wpp">
                                        <BsWhatsapp />
                                        WhatssApp
                                    </li>
                                </a>
                                <Link to='/contact'>
                                    <li className="tag__item_cash">
                                        <MdOutlineAttachMoney />
                                        Orçamento
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </article>
                    <article className="postcard light red">
                        <a className="postcard__img_link" href="#">
                            {photoRight && <img className='img-fluid' src={photoRight} alt="" />}
                            {videoRight && <video width='100%' height='100%' src={videoRight} autoPlay={true} muted loop></video>}

                        </a>
                        <div className="postcard__text t-dark">
                            <h1 className="postcard__title red">{titleRight}</h1>
                            <div className="postcard__subtitle small">
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{textRight}</div>
                            <ul className="postcard__tagbox">
                                <a href="http://wa.me/5511971181829" target='_blank'>
                                    <li className="tag__item_wpp">
                                        <BsWhatsapp />
                                        WhatssApp
                                    </li>
                                </a>
                                <Link to='/contact' target='_blank'>
                                    <li className="tag__item_cash">
                                        <MdOutlineAttachMoney />
                                        Orçamento
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default ContainerServices