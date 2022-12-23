import React from 'react';
import './Form.css'
import { BsArrowRight } from 'react-icons/bs'

const sendFormByEmail = (e) => {
    e.preventDefault()
    console.log('Enviado!')
}

function App() {
    return (
        <div className="wrapper">
            <div className="inner">
                <form onSubmit={sendFormByEmail}>
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
                        <input type="text" className="form-control" required />
                        <span>Nome</span>

                    </label>
                    <label className="form-group">
                        <input type="text" className="form-control" required />
                        <span for="">E-Mail</span>

                    </label>
                    <label className="form-group" >
                        <textarea name="" id="" className="form-control" required></textarea>
                        <span for="">Mensagem</span>
                    </label>
                    <button>Submit
                        <i>
                            <BsArrowRight />
                        </i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default App;