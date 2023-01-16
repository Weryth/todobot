//const TelegramAPI = require('node-telegram-bot-api');
import TelegramAPI from 'node-telegram-bot-api'
import * as dotenv from 'dotenv'
import {writerDataInJson} from './todocreator.js'

dotenv.config()

const tgBotToken = process.env.TG_TOKEN
const bot = new TelegramAPI(tgBotToken, { polling: true })

bot.on('message', msg => {
    const text = msg.text;
    const chatID = msg.chat.id;
    //console.log(msg)
    switch(text){
        case "/start":
            bot.sendMessage(chatID, `Здравствуйте, ${msg.from.first_name}!\nНапишите /create, чтобы создать задачу\nНапишите /show, чтобы посмотреть свои задачи`)
            writerDataInJson(chatID, "grhrhr", "Сделать ЛК", "17.01")
            break;

        
    }
    
    
})