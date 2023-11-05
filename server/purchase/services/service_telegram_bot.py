import logging

import telebot
from decouple import config
from telebot import types

TOKEN = config('TELEGRAM_BOT_TOKEN')

logging.basicConfig(level=logging.INFO)
bot = telebot.TeleBot(token=TOKEN, parse_mode='html')


@bot.message_handler(commands=["start"])
def cmd_start(message):
    text = f'<strong>Номер закупки:</strong> asd'
    bot.send_message(message.chat.id, text)


def send_telegram_message(obj):
    markup = types.InlineKeyboardMarkup()
    button1 = types.InlineKeyboardButton("перейти на источник", url=obj.url)
    markup.add(button1)

    type_of_procurement_dict = {
        'Goods': 'Товары',
        'work': 'Работы',
        'services': 'Услуги'
    }
    procurement_method_dict = {
        'One stage': 'Неограниченный',
        'Simplified': 'Простой',
    }

    text = f'<strong>📋 Информация о закупке 🛒</strong>\n' \
           f'<strong>🔢 Номер закупки:</strong> {obj.number}\n' \
           f'<strong>🏢 Наименование компании:</strong> {obj.name_of_company}\n' \
           f'<strong>🏭 Тип закупки:</strong> {type_of_procurement_dict[obj.type_of_procurement]}\n' \
           f'<strong>📦 Наименование закупки:</strong> {obj.purchase_name}\n' \
           f'<strong>💼 Метод закупки:</strong> {procurement_method_dict[obj.procurement_method]}\n' \
           f'<strong>💰 Плановая сумма:</strong> {obj.planned_amount}\n' \
           f'<strong>📅 Дата публикации:</strong> {obj.date_published}\n' \
           f'<strong>🕒 Срок подачи заявок:</strong> {obj.bids_submission_deadline}'
    chat_id = '-1002084317450'
    bot.send_message(chat_id, text, reply_markup=markup)


if __name__ == "__main__":
    bot.infinity_polling(none_stop=True)
