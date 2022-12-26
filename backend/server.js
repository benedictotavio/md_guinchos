const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
// const path = require('path')
// const app = express()
// const router = express.Router()

// const PORT = process.env.PORT || 5000

// //Middleware
// app.use(express.static('public'))

// router.get ('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, './client/public', 'index.html'))
// })

// app.use('/',router)

// app.listen(PORT,()=>{
//     console.log(`Servidor rodando na porta ${PORT}`)
// })

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('welcome to my forma')
})

app.post('/api/forma', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'otavio.bene2212@gmail.com',
            pass: 'tavinho12'
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'otavio.bene2212@gmail.com',
        subject: `Mensagem de Cliente - ${data.name}`,
        html: `
        
        <h2>
        <b> Mensagem de ${data.name}</b>
        </h2>

        <ul>
        <li>Name: ${data.name}</li>
        <li>E-Mail: ${data.email}</li>
        </ul>

        <p>
        ${data.msg}
        </p>
        `
    };

    smtpTransport.sendMail(mailOptions,(error,response)=>{
        error ? res.send(error) : res.send('Success')
    })

    smtpTransport.close()
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Servidor rodando em porta ${PORT}`)
})