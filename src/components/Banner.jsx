import React from 'react'
import './Banner.css'
import { BsWhatsapp } from 'react-icons/bs'




const Banner = ({ imgBack, express }) => {

    return (
        <section id='banner' style={{ textAlign: "center", color: "whitesmoke", backgroundImage: `url(${imgBack})` }}>
            {!express && <div className='container-fluid w-100'>
                <div className='p-1'>
                    <h4>GUINCHOS SP - 24 HORAS | 7 DIAS DA SEMANA</h4>
                    <h6>Equipe sempre a pronto atendimento!</h6>
                    <h3 className='btn-number-wpp'>
                        <a href="http://wa.me/5511971181829" target='_blank' rel="noreferrer"><BsWhatsapp /> (11)97380-0547</a>
                    </h3>
                </div>
            </div>}
        </section>
    )
}

export default Banner