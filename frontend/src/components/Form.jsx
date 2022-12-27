import React, { useState } from 'react';
import './Form.css'
import { BsArrowRight } from 'react-icons/bs'

function App() {

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
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json()) 
          .catch(err => console.log(err))

          setInterval(()=>{
            setName('')
            setEmail('')
            setTel('')
            setMsg('')
          },800)
    }



    return (
        <section id="form">
            <div className="wrapper">
                <div className="inner py-md-4" >
                    <form onSubmit={formSubmit} >
                        <h3>Fale Conosco</h3>
                        <div className='row py-md-2'>
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
                            <input type="text" className="form-control" required onChange={(e) => setName(e.target.value)}  value={name}  />
                            <span>Nome</span>

                        </label>
                        <label className="form-group">
                            <input type="text" className="form-control" required onChange={(e) => setEmail(e.target.value)}  value={email}  />
                            <span htmlFor="">E-Mail</span>

                        </label>
                        <label className="form-group">
                            <input type="text" className="form-control" required onChange={(e) => setTel(e.target.value)}  value={tel}  />
                            <span htmlFor="">Telefone</span>
                        </label>
                        <label className="form-group" >
                            <textarea name="" id="" className="form-control" required onChange={(e) => setMsg(e.target.value)}  value={msg} ></textarea>
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