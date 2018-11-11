const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    sgMail = require('@sendgrid/mail'),
    config = require('./config'),
    port = process.env.PORT || 3333;

sgMail.setApiKey(config.sendgrid);

app.use(express.static(`${__dirname}/../client`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Content-Type', 'application/json')
    next();
});

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/frontend/index.html`)
})
app.post('/submit', (req, res) => {

    let msg = {
        to: 'djdebnam@gmail.com',
        from: req.body.email,
        subject: 'Sent from portfolio site',
        text: req.body.message,
        html: `<strong>${req.body.message}</strong>`
    };
    sgMail.send(msg)
        .then(() => console.log('Email sent'))
        .catch((error) => console.log(error))
})

app.listen(port, () => console.log('Server start'));