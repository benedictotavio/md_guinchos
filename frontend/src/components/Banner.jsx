import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import { BsWhatsapp } from 'react-icons/bs'
import { FaMotorcycle, FaShuttleVan } from 'react-icons/fa'
import { BsTruckFlatbed } from 'react-icons/bs'
import { GiCarBattery } from 'react-icons/gi'

const Banner = ({imgBack}) => {

    return (
        <section id='banner' style={{ textAlign: "center", color: "whitesmoke", backgroundImage:`url(${imgBack})` }}>
            <div className='container-fluid w-100'>
                <div className='p-1'>
                    <h4>GUINCHOS SP 24 HORAS | 7 DIAS DA SEMANA</h4>
                    <h6>Equipe sempre a pronto atendimento!</h6>
                    <h3 className='btn-number-wpp'>
                        <a href="http://wa.me/5511971181829">(11)97380-0547</a>
                    </h3>
                </div>
                <div id='menu-service'>
                    <ul style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
                        <li>
                            <Link to='/services'>
                                <FaShuttleVan color='white' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/services'>
                                <FaMotorcycle color='white' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/services'>
                                <BsTruckFlatbed color='white' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/services'>
                                <GiCarBattery color='white' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner