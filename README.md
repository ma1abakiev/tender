# tender
Запуск сервера

команды: 

# собрать серевер
docker-compose build 

# запустить сервер
dokcer-compose up 

# запустить сервис который парсит и отправляет данные в instagram, telegram и на почту
docker-compose exec open_bid_server python manage.py run_service 


