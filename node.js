const express = require('express');
const bodyParser = require('body-parser');
const https = require('https'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const BOT_TOKEN = '7259468509:AAHPZPNsgJlPklQEfrw1yxafDN0WYSXWsZQ';
const CHAT_ID = '6994578596';

app.post('/register', (req, res) => {
  const formData = req.body;

  // Formater le message Telegram
  let message = `Nouvelle inscription :\n\n`;
  message += `Nom: ${formData.firstName} ${formData.lastName}\n`;
  message += `Contact: ${formData.contact}\n`;
  message += `Date de naissance: ${formData.birthDate}\n`;
  message += `Pays: ${formData.country}\n`;

  // Envoyer le message à Telegram
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const data = JSON.stringify({ 
    chat_id: CHAT_ID, 
    text: message 
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const request = https.request(url, options, (response) => {
    // Gérer la réponse de Telegram
  });

  request.on('error', (error) => {
    console.error('Erreur lors de l'envoi du message Telegram:', error);
    res.status(500).send("Erreur lors de l'inscription.");
  });

  request.write(data);
  request.end();

  res.send("Inscription réussie !"); // Répondre au client
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

