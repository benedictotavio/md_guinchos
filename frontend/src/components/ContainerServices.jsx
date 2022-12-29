import React from 'react'
import './ContainerServices.scss'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContainerServices = ({ photoLeft, titleLeft, textLeft, photoRight, titleRight, textRight, section }) => {
    return (
        <>
            <section id='container-services'>
                <div className="container">
                    <article className="postcard light blue">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src={photoLeft} alt="Image Title" />
                        </a>
                        <div className="postcard__text t-dark">
                            <h1 className="postcard__title blue"><a href="#">{titleLeft}</a></h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
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
                            <img className="postcard__img" src={photoRight} alt="Image Title" />
                        </a>
                        <div className="postcard__text t-dark">
                            <h1 className="postcard__title red"><a href="#">{titleRight}</a></h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
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
                                <Link to='/contact'>
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