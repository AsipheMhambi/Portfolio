// api/contact.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Endpoint for handling form submissions
app.post('contact', (req, res) => {
  const { name, email, message } = req.body;

  // Replace these with your email and SMTP details
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amhambi95@gmail.com',
      pass: '25a06@M95',
    },
  });

  const mailOptions = {
    from: email,
    to: 'amhambi95@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('OK');
    }
  });
});

// Listen to requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
