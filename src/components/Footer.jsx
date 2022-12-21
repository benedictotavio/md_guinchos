import React from 'react'
import Flags from '../imgs/flags.png'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className="footer-08 p-md-2">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-md-8 py-5">
                            <div className="row">
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Sobre Nos</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <ul className="d-flex">
                                        <li className="list-group-item"><FaFacebookF color='#76c6f8' /></li>
                                        <li className="list-group-item"><FaInstagram color='#76c6f8' /></li>
                                        <li className="list-group-item"><FaTwitter color='#76c6f8' /></li>
                                    </ul>
                                </div>
                                <div className="col-md-8">
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
                            <div className="row mt-md-5">
                                <div className="col-md-12 m-3">
                                   <img src={Flags} alt="Bandeiras aceitas!" style={{maxWidth:'100%',margin:'1% auto'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-md-5 py-4 pl-lg-5" style={{ backgroundColor: "#76c6f8" }}>
                            <div>
                                <h2 className="footer-heading footer-heading-white text-white text-center">Fale Conosco</h2>
                            </div>
                            <form action="#" className="contact-form" >
                                <div className="form-group">
                                    <input type="text" className="form-control my-2" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control my-2" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control my-2" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="3" className="form-control my-2" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary form-control my-2 submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer