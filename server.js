const express = require('express');
const path = require('path');
const app = express();

const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');
const mailerConfig = require('./config/mailerConfig')

const bodyParser = require('body-parser');

app.use(express.json());

const transporter = nodemailer.createTransport(ses({
  accessKeyId: mailerConfig.accessKeyId,
  secretAccessKey: mailerConfig.secretAccessKey,
  rateLimit: 5
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files....
app.use(express.static(__dirname + '/dist/portfolio'));

// Send all requests to index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.post('/api/contact', (req, res) => {
  console.log('Request Body: ' + req.body.fullName + ' ' + '\n ' + req.body.reason + '\n E-mail: ' + req.body.email);
  
  let mailOptions = {
    from: 'wes@encontext.io',
    to: 'wes@encontext.io',
    subject: 'New Contact: ' + req.body.fullName,
    text:  req.body.fullName + '\n ' + req.body.reason + '\n E-mail: ' + req.body.email
  };

 transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.json({ 'status': false })
    } else {
        console.log('Email sent');
        res.json({ 'status': true })
    }
  });
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);