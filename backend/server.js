const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()
const app = express()

//Middleware
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('welcome to my forma')
})

app.get('/api/forma', async (req, res) => {
    res.status(200).send('Envio')
})

app.post('/api/forma', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        host:'gsmtp.gmail.com',
        service: 'gmail',
        port: 465,
        secure:true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.SENHA
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'otavio.bene2212@gmail.com',
        subject: `Mensagem de Cliente - ${data.name}`,
        html: `
        <h2>
        <b>Mensagem de ${data.name}</b>
        </h2>
        <ul>
        <li>Name: ${data.name}</li>
        <li>E-Mail: ${data.email}</li>
        <li>Telefone: ${data.tel}</li>
        </ul>
        <p>
        ${data.msg}x
        </p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? res.send(error) : res.status(200).send('Success')
    })

    smtpTransport.close()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor rodando em porta ${PORT}`)
})