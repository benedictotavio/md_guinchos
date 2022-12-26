import React from 'react'
import './ContainerServices.scss'

const ContainerServices = ({ photoLeft, titleLeft, textLeft, photoRight, titleRight, textRight }) => {
    return (
        <>
            <section className="light">
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
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                <li className="tag__item play blue">
                                    <a href="#">
                                        <i>
                                            
                                        </i>
                                    </a>
                                </li>
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
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                <li className="tag__item play red">
                                    <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default ContainerServices