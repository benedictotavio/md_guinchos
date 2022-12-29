import React, { useState } from 'react'
import './Banner.css'
import { FaMotorcycle, FaShuttleVan } from 'react-icons/fa'
import { BsTruckFlatbed } from 'react-icons/bs'
import { GiCarBattery } from 'react-icons/gi'
import FormModal from './FormModal'

//Photos
import fotoService1 from '../galeria-fotos/foto-1.png'
import fotoService2 from '../galeria-fotos/foto-2.png'
import fotoService3 from '../galeria-fotos/foto-3.png'
import fotoService4 from '../galeria-fotos/foto-4.png'
import fotoService5 from '../galeria-fotos/foto-5.png'
import fotoService6 from '../galeria-fotos/foto-7.png'

const Banner = ({ imgBack, express }) => {

    return (
        <section id='banner' style={{ textAlign: "center", color: "whitesmoke", backgroundImage: `url(${imgBack})` }}>
            {!express && <div className='container-fluid w-100'>
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
                            <FormModal
                                img={fotoService1}
                                icon={<FaShuttleVan color='white' />}
                                text='Reboques de veiculos utilitários!'
                                title='Utilitários'
                            />
                        </li>
                        <li>
                            <FormModal
                                img={fotoService2}
                                icon={<FaMotorcycle color='white' />}
                                text='Reboques de veiculos utilitários!'
                                title='Utilitários'
                            />
                        </li>
                        <li>
                            <FormModal
                                img={fotoService4}
                                icon={<BsTruckFlatbed color='white' />}
                                text='Reboques de veiculos utilitários!'
                                title='Utilitários'
                            />
                        </li>
                        <li>
                            <FormModal
                                img={fotoService5}
                                icon={<GiCarBattery color='white' />}
                                text='Reboques de veiculos utilitários!'
                                title='Utilitários'
                            />
                        </li>
                    </ul>
                </div>
            </div>}
        </section>
    )
}

export default Banner