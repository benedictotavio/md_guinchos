import React from 'react'
import './Banner.css'
import { BsWhatsapp } from 'react-icons/bs'
import { FaMotorcycle, FaShuttleVan } from 'react-icons/fa'
import { BsTruckFlatbed } from 'react-icons/bs'
import { GiCarBattery } from 'react-icons/gi'

const Banner = () => {
    return (
        <section id='banner' style={{ textAlign: "center", color: "whitesmoke" }}>
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
                        <li><FaShuttleVan /></li>
                        <li><FaMotorcycle /></li>
                        <li><BsTruckFlatbed /></li>
                        <li><GiCarBattery /></li>
                    </ul>
                </div>
                <div className="btn-wpp">
                    <a href="http://wa.me/5511971181829" target="_blank" rel='noopener noreferrer'>
                        <BsWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner