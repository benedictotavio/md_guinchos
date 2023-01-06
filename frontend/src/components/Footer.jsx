import React, { useState } from 'react'
import Flags from '../imgs/flags.png'
import SocialIcons from './SocialIcons'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Footer = ({ form }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [tel, setTel] = useState('')

    const formSubmit = async (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(msg)

        const _data = {
            name,
            email,
            tel,
            msg,
        }

        await fetch('/api/forma', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .catch(err => console.log(err))

        setInterval(() => {
            setName('')
            setEmail('')
            setTel('')
            setMsg('')
        }, 800)
    }

    return (
        <>
            <footer className="footer-08 py-md-4" style={{ backgroundColor: "whitesmoke" }}>
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        {!form &&
                            <>
                                <div className="col-md-8 py-5">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-11">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-md-0 mb-4 text-center">
                                                            <h2 className="footer-heading">Guinchos</h2>
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item">Carga de Bateria</li>
                                                                <li className="list-group-item">Destrancar Carro</li>
                                                                <li className="list-group-item">Veiculos Pesados</li>
                                                                <li className="list-group-item">Motos</li>
                                                                <li className="list-group-item">
                                                                    <Link to='/services' style={{ textDecoration: 'none' }}>
                                                                        Veja todos nossos serviços <BsFillArrowRightCircleFill/>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-6 mb-md-0 mb-4 text-center">
                                                            <h2 className="footer-heading">Transportes</h2>
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item">Retirada de Podas</li>
                                                                <li className="list-group-item">Retirada de Residuos</li>
                                                                <li className="list-group-item">Mudanças</li>
                                                                <li className="list-group-item">Fretes Terçeirizados</li>
                                                                <li className="list-group-item">
                                                                    <Link to='/express' target='_blank'>
                                                                        Marcio Express 
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 py-md-5 py-4 pl-lg-5" style={{
                                    background: '#36d1dc',
                                    background: '-webkit-linear-gradient(to right, #36d1dc, #5b86e5)',
                                    background: 'linear-gradient(to right, #36d1dc, #5b86e5)',
                                    height: '50%',
                                    borderRadius: "10px"
                                }}>

                                    <div>
                                        <h2
                                            style={{textShadow:'1px 1px 2px white'}}
                                            className=" text-dark footer-heading footer-heading-white text-center">
                                            Fale Conosco
                                        </h2>
                                    </div>
                                    <form action="#" className="contact-form" onSubmit={formSubmit}>
                                        <div className="form-group">
                                            <input type="text" className="form-control my-2" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control my-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control my-2"
                                                onChange={(e) => setTel(e.target.value)}
                                                placeholder="Telefone"
                                                value={tel} />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="" id="" cols="30" rows="3" className="form-control my-2"
                                                placeholder="Mensagem"
                                                onChange={(e) => setMsg(e.target.value)}
                                                value={msg}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary form-control my-2 submit">Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </>}
                        {form &&
                            <>
                                <div className="row">
                                    <div className="col-md-6 mb-md-0 mb-4 text-center">
                                        <h2 className="footer-heading">Guinchos</h2>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Carga de bateria</li>
                                            <li className="list-group-item">Destrancar carro</li>
                                            <li className="list-group-item">Veiculos pesados</li>
                                            <li className="list-group-item">Motos</li>
                                            <li className="list-group-item">
                                                <Link to='/services' style={{ textDecoration: 'none' }}>
                                                    Veja todos serviços <BsFillArrowRightCircleFill />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 mb-md-0 mb-4 text-center">
                                        <h2 className="footer-heading">Transportes</h2>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Retirada de Podas</li>
                                            <li className="list-group-item">Retirada de Residuos</li>
                                            <li className="list-group-item">Mudanças</li>
                                            <li className="list-group-item">Fretes Terçeirizados</li>
                                            <li className="list-group-item">
                                                <Link to='/express' target='_blank'>
                                                    Marcio Express
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>}
                        <div className="col-md-12 d-flex justify-content-center img-fluid">
                            <img src={Flags} alt="Bandeiras aceitas!" style={{ maxWidth: '100%', margin: '1% auto' }} />
                        </div>
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