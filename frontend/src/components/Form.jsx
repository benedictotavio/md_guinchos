import React, { useState } from 'react';
import './Form.css'
import { BsArrowRight } from 'react-icons/bs'
import axios from 'axios'

function App() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        const data = {
            name:name,
            email:email,
            msg:msg
        }

        axios.post('/api/forma', data).then((res) => {
            setTimeout(() => {
                setEmail('')
                setName('')
                setMsg('')
            },2000)

        }).catch(err => console.log(`Mensagem de Erro! ${err}`))
    }



    return (
        <section id="form">
            <div className="wrapper">
                <div className="inner my-md-4" >
                    <form onSubmit={formSubmit} >
                        <h3>Fale Conosco</h3>
                        <div className='row'>
                            <div className='col-md-4'>
                                <h6 className=''>Orçamento</h6>
                            </div>
                            <div className="col-md-8">
                                <h6 className=''>Verifique Disponibilidade</h6>
                            </div>
                        </div>
                        <div className='row mb-md-3'>
                            <div className='col-md-7'>
                                <h6 className=''>Fretes Terceirizados</h6>
                            </div>
                            <div className="col-md-5">
                                <h6 className=''>Agendamento</h6>
                            </div>
                        </div>
                        <label className="form-group">
                            <input type="text" className="form-control" required onChange={(e) => setName(e.target.value)} />
                            <span>Nome</span>

                        </label>
                        <label className="form-group">
                            <input type="text" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                            <span htmlFor="">E-Mail</span>

                        </label>
                        <label className="form-group" >
                            <textarea name="" id="" className="form-control" required onChange={(e) => setMsg(e.target.value)}></textarea>
                            <span htmlFor="">Mensagem</span>
                        </label>
                        <button>Submit
                            <i>
                                <BsArrowRight />
                            </i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default App;