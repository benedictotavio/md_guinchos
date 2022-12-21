import React from 'react';
import './Form.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea,
    MDBFile
}
    from 'mdb-react-ui-kit';

const sendFormByEmail = (e) => {
    e.preventDefault()
    console.log('Enviado!')
}

function App() {
    return (
        <section id='bg-form'>
            <form className='p-md-4' onSubmit={sendFormByEmail}>
            <div className="form-group mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nome" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlSelect1">Selecione o serviço:</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Guinchos</option>
                        <option>Transportes</option>
                        <option>Outros</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Selecione a Região</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                        <option>Grande São Paulo</option>
                        <option>Litoral</option>
                        <option>Inteiror</option>
                        <option>ABC</option>
                    </select>
                </div>
                <div className="form-group py-md-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Mensagens'></textarea>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary'>Enviar</button>
                </div>
            </form>
        </section>
    )
}

export default App;