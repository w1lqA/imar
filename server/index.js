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
        html: `
            <!DOCTYPE html>
            <html lang="ru">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Новое сообщение</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, Helvetica, sans-serif; color: #222222;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4; padding: 40px 20px;">
                    <tr>
                        <td align="center">
                            <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                                <tr>
                                    <td style="padding: 32px;">
                                        <h1 style="margin: 0 0 24px; font-size: 24px; line-height: 1.3; color: #111111;">
                                            Новое сообщение с сайта
                                        </h1>
    
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                                                    <strong>Имя:</strong>
                                                    ${userName}
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                                                    <strong>Email:</strong>
                                                    <a href="mailto:${userEmail}" style="color: #2563eb; text-decoration: none;">
                                                        ${userEmail}
                                                    </a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                                                    <strong>Телефон:</strong>
                                                    ${userPhone}
                                                </td>
                                            </tr>
                                        </table>
    
                                        <h2 style="margin: 28px 0 12px; font-size: 18px; color: #111111;">
                                            Сообщение
                                        </h2>
    
                                        <div style="padding: 16px; background-color: #f8f8f8; border-radius: 6px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
                                            ${message}
                                        </div>
    
                                        <p style="margin: 28px 0 0; font-size: 12px; line-height: 1.5; color: #888888;">
                                            Это сообщение было отправлено через контактную форму сайта.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
        `,
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
