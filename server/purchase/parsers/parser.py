import json
from datetime import datetime

from bs4 import BeautifulSoup
import requests

url = 'https://zakupki.okmot.kg/popp/view/order/'
url_list = url + 'list.xhtml'
url_id = url + 'view.xhtml?id='
headers = {
    'Accept': 'application/xml, text/xml, */*; q=0.01',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/118.0.0.0 Mobile Safari/537.36'
}


def get_list_obj(url):
    page = requests.get(url, headers=headers)
    soup = BeautifulSoup(page.text, 'lxml')
    rows = soup.findAll('tr')[4:]
    data = []
    for row in rows:
        cols_1 = row.find_all('td')[:4]
        cols_2 = row.find_all('td')[5:]
        cols = cols_1 + cols_2
        row_data = {}
        for col in cols:
            span = col.find('span')
            if span is not None:
                key = span.get_text(strip=True)
                value = col.get_text(strip=True)
                if key:
                    value = value.split(key)[1]
                key = '_'.join(key.lower().split())
                row_data['_'.join(key.split()).lower()] = value
        row_data['url'] = url_id + row_data['number'][5:]
        row_data['planned_amount'] = float(row_data['planned_amount'].replace(',', ''))
        row_data['date_published'] = datetime.strptime(row_data['date_published'], '%d.%m.%Y %H:%M')
        row_data['bids_submission_deadline'] = datetime.strptime(row_data['bids_submission_deadline'], '%d.%m.%Y %H:%M')
        data.append(row_data)
    return data


if __name__ == '__main__':
    data = get_list_obj(url_list)

    with open('data.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False)

# number / 2310262314209
# Name of company / Муниципальное предприятие Зеленного хозяйство при мэрии города Балыкчы
# Type of procurement / Товары Goods
# purchase Name / Покупка расходный материал для АСУ
# procurement method /
# Planned amount / 99,740
# Date published / 26.10.2023 11:27
# Bids Submission Deadline / 31.10.2023 11:14
