const TelegramAPI = require('node-telegram-bot-api')
require('dotenv').config();


const tgBotToken = process.env.TG_TOKEN
const bot = new TelegramAPI(tgBotToken, { polling: true })
bot.on('message', msg => {
    const text = msg.text;
    const chatID = msg.chat.id;
    bot.sendMessage(chatID, "Start")
})