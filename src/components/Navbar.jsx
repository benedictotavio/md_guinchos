import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../imgs/logo_marcio.png'
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {
    return (
        <section className='d-flex justify-content-md-around p-2'>
            <div className=''>
                <Link to='/' className="navbar-brand p-3">
                    <img src={Logo} alt="logo marcio guinchos" />
                </Link>
            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid m-0">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <GiHamburgerMenu className='navbar-toggler-icon'/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Serviços</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" href="#">Fale Conosco</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Transporte de Cargas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar