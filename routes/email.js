var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { senderEmail, recipientEmail, subject, message } = req.body;

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou un autre service (ex: Outlook, Yahoo)
        auth: {
            user: 'votre-email@gmail.com', // Remplacez par votre email
            pass: 'votre-mot-de-passe',   // Remplacez par votre mot de passe
        },
    });

    const mailOptions = {
        from: senderEmail, // Expéditeur dynamique
        to: recipientEmail, // Destinataire
        subject: subject,
        text: message,
        disableFileAccess: true,
        disableUrlAccess: true,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email envoyé avec succès !');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'envoi de l\'email.');
    }
});

module.exports = router;
