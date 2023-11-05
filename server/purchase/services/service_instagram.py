from decouple import config
from instagrapi import Client

ACCOUNT_USERNAME = config('INSTAGRAM_ACCOUNT_USERNAME')
ACCOUNT_PASSWORD = config('INSTAGRAM_ACCOUNT_PASSWORD')

cl = Client()
cl.login(ACCOUNT_USERNAME, ACCOUNT_PASSWORD)


def public_post_instagram(obj):
    type_of_procurement_dict = {
        'Goods': 'Товары',
        'work': 'Работы',
        'services': 'Услуги'
    }
    procurement_method_dict = {
        'One stage': 'Неограниченный',
        'Simplified': 'Простой',
    }
    text = f'Номер закупки: {obj.number}\n' \
           f'Наименование компании: {obj.name_of_company}\n' \
           f'Тип закупки: {type_of_procurement_dict[obj.type_of_procurement]}\n' \
           f'Наименование закупки: {obj.purchase_name}\n' \
           f'Метод закупки: {procurement_method_dict[obj.procurement_method]}\n' \
           f'Плановая сумма: {obj.planned_amount}\n' \
           f'Дата публикации: {obj.date_published}\n' \
           f'Срок подачи заявок: {obj.bids_submission_deadline}\n'\
           f'Ссылка на источник: {obj.url}'
    cl.photo_upload(
        path="purchase/services/purchase_image.jpg",
        caption=text,
        extra_data={
            "custom_accessibility_caption": "alt text example",
            "like_and_view_counts_disabled": 1,
            "disable_comments": 1,
        }
    )
