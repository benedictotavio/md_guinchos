import React from 'react'
import Flags from '../imgs/flags.png'
import SocialIcons from './SocialIcons'
import FormModal from './FormModal'
import fotoService1 from '../galeria-fotos/foto-1.png'
import fotoService2 from '../galeria-fotos/foto-2.png'
import fotoService3 from '../galeria-fotos/foto-3.png'
import fotoService4 from '../galeria-fotos/foto-4.png'
import fotoService5 from '../galeria-fotos/foto-5.png'
import fotoService6 from '../galeria-fotos/foto-7.png'

import { GiDeadWood, GiBrickPile, GiRecycle } from 'react-icons/gi'

const Footer = ({ form }) => {
    return (
        <>
            <footer className="footer-08 py-md-4" style={{ backgroundColor: "whitesmoke" }}>
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-md-8 py-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-10">
                                            <div className="row">
                                                <div className="col-md-6 mb-md-0 mb-4">
                                                    <h2 className="footer-heading">Guinchos</h2>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Cras</li>
                                                        <li className="list-group-item">Dapibus</li>
                                                        <li className="list-group-item">Services</li>
                                                        <li className="list-group-item">Name</li>
                                                        <li className="list-group-item">Vestibulum at eros</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 mb-md-0 mb-4">
                                                    <h2 className="footer-heading">Transportes</h2>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Cras</li>
                                                        <li className="list-group-item">Dapibus</li>
                                                        <li className="list-group-item">Services</li>
                                                        <li className="list-group-item">Name</li>
                                                        <li className="list-group-item">Vestibulum at eros</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mt-2">
                                <img src={Flags} alt="Bandeiras aceitas!" style={{ maxWidth: '100%', margin: '1% auto' }} />
                            </div>
                        </div>
                        {!form && <div className="col-md-4 py-md-5 py-4 pl-lg-5" style={{ backgroundColor: "#76c6f8", height: '50%', borderRadius: "10px" }}>
                            <div>
                                <h2 className="footer-heading footer-heading-white text-white text-center">Fale Conosco</h2>
                            </div>
                            <form action="#" className="contact-form" >
                                <div className="form-group">
                                    <input type="text" className="form-control my-2" placeholder="Nome" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control my-2" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control my-2" placeholder="Assunto" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="3" className="form-control my-2" placeholder="Mensagem"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary form-control my-2 submit">Enviar</button>
                                </div>
                            </form>
                        </div>}
                        {form &&
                            <div className="col-md-4 py-md-5 py-4 pl-lg-5" style={{ maxHeight: '50%', borderRadius: "10px" }}>
                                <div className='p-md-2 text-center rounded-3' style={{ backgroundColor: "#76c6f8" }}>
                                    <h4>Conheça nossos serviço de cargas</h4>
                                </div>
                                <div className='border border-3 border-top-0 rounded-3'>
                                    <div className="row p-md-3">
                                        <FormModal
                                        icon={<GiDeadWood fontSize='2.5em'/>} 
                                        title='Retirada de podas'
                                        text='Na Disk Podas você conta também com os serviços de remoção de resíduos e limpeza total de área em terrenos baldios, campos, loteamentos, chácaras, sítios, em toda a capital, Interior e Litoral.'
                                        img={fotoService1}/>
                                         <FormModal
                                        icon={<GiBrickPile fontSize='2.5em'/>} 
                                        title='Retirada de Entulho'
                                        text='Na Disk Podas você conta também com os serviços de remoção de resíduos e limpeza total de área em terrenos baldios, campos, loteamentos, chácaras, sítios, em toda a capital, Interior e Litoral.'
                                        img={fotoService2}/>
                                         <FormModal
                                        icon={<GiRecycle fontSize='2.5em'/>} 
                                        title='Retirada de Residuos'
                                        text='Na Disk Podas você conta também com os serviços de remoção de resíduos e limpeza total de área em terrenos baldios, campos, loteamentos, chácaras, sítios, em toda a capital, Interior e Litoral.'
                                        img={fotoService3}/>
                                    </div>
                                    <div className="row p-md-3">
                                        <FormModal
                                        icon={<GiDeadWood fontSize='2.5em'/>} 
                                        title='Retirada de podas'
                                        text='Na Disk Podas você conta também com os serviços de remoção de resíduos e limpeza total de área em terrenos baldios, campos, loteamentos, chácaras, sítios, em toda a capital, Interior e Litoral.'
                                        img={fotoService4}/>
                                         <FormModal
                                        icon={<GiBrickPile fontSize='2.5em'/>} 
                                        title='Retirada de Entulho'
                                        text='Na Disk Podas você conta também com os serviços de remoção de resíduos e limpeza total de área em terrenos baldios, campos, loteamentos, chácaras, sítios, em toda a capital, Interior e Litoral.'
                                        img={fotoService5}/>
                                         <FormModal
                                        icon={<GiRecycle fontSize='2.5em'/>} 
                                        title='Retirada de Residuos'
                                        text='Na Disk Podas você conta também com os serviços de remoção de resíduos e limpeza total de área em terrenos baldios, campos, loteamentos, chácaras, sítios, em toda a capital, Interior e Litoral.'
                                        img={fotoService6}/>
                                    </div>
                                </div>
                            </div>}
                        <div className='col-md-12 d-flex justify-content-center'>
                            <div>
                                <SocialIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer