const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

const corsOptions = {
    origin: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.error('Mailer connection error:', error);
    } else {
        console.log('Mailer is ready');
    }
});

app.post('/api/sendEmail', async (req, res) => {
    const {
        userEmail,
        userName,
        userPhone,
        message,
        emailType,
    } = req.body;

    console.log('Received email request:', {
        userEmail,
        userName,
        userPhone,
        emailType,
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.CONTACT_EMAIL,
        replyTo: userEmail,
        subject: `${emailType} - Новое сообщение`,
        text: [
            'Новое сообщение с сайта',
            '',
            `Имя: ${userName}`,
            `Email: ${userEmail}`,
            `Телефон: ${userPhone}`,
            '',
            'Сообщение:',
            message,
        ].join('\n'),
    };

    try {
        await contactEmail.sendMail(mailOptions);

        console.log('Email sent successfully');

        res.status(200).json({
            code: 200,
            status: 'Message Sent!',
        });
    } catch (error) {
        console.error('Error sending email:', error);

        res.status(500).json({
            code: 500,
            status: 'Failed to send message',
        });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
