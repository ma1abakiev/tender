from django.core.management import BaseCommand
from django.db import DatabaseError

from purchase.parsers.parser import get_list_obj
from purchase.models import Purchase

#
# url = 'https://zakupki.okmot.kg/popp/view/order/'
# url_list = url + 'list.xhtml'
# url_id = url + 'view.xhtml?id='
# headers = {
#     'Accept': 'application/xml, text/xml, */*; q=0.01',
#     'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) '
#                   'Chrome/118.0.0.0 Mobile Safari/537.36'
# }

# obj_list = get_list_obj(url_list)
#
# for obj in obj_list:
#     p = Purchase(**obj)
#     try:
#         p.save()
#     except DatabaseError:
#         pass


# class Command(BaseCommand):
#     help = 'Run your custom service'
#
#     def handle(self, *args, **options):
#         url = 'https://zakupki.okmot.kg/popp/view/order/'
#         url_list = url + 'list.xhtml'
#         url_id = url + 'view.xhtml?id='
#         headers = {
#             'Accept': 'application/xml, text/xml, */*; q=0.01',
#             'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) '
#                           'Chrome/118.0.0.0 Mobile Safari/537.36'
#         }
#
#         obj_list = get_list_obj(url_list)        # Вызывайте вашу функцию из вашего приложения
#
#         for obj in obj_list:
#             p = Purchase(**obj)
#             try:
#                 p.save()
#             except DatabaseError:
#                 pass
#
#         self.stdout.write(self.style.SUCCESS('Service has been executed successfully.'))
