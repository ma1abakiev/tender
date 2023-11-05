from django.core.management import BaseCommand
from django.db import DatabaseError

from purchase.services.service_email import send_email
from purchase.services.service_instagram import public_post_instagram
from purchase.services.service_parser import get_list_obj
from purchase.models import Purchase
from purchase.services.service_telegram_bot import send_telegram_message


class Command(BaseCommand):
    help = 'Run your custom service'

    def handle(self, *args, **options):
        url = 'https://zakupki.okmot.kg/popp/view/order/'
        url_list = url + 'list.xhtml'

        obj_list = get_list_obj(url_list)[::-1]

        for obj in obj_list:
            p = Purchase(**obj)
            try:
                p.save()
                send_telegram_message(p)
                public_post_instagram(p)
            except DatabaseError:
                pass

        self.stdout.write(self.style.SUCCESS('Service has been executed successfully.'))
