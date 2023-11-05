from django.core.mail import EmailMultiAlternatives


def send_email(obj, email_list):
    subject = 'новое объявление - гос. закупки!'
    from_email = 'asanovkurmanbek342@gmail.com'
    recipient_list = list(email_list)
    html_message = f"""
                    <p><strong>Номер закупки:</strong> {obj.number}</p>
                    <p><strong>Наименование компании:</strong> {obj.name_of_company}</p>
                    <p><strong>Тип закупки:</strong> {obj.type_of_procurement}</p>
                    <p><strong>Наименование закупки:</strong> {obj.purchase_name}</p>
                    <p><strong>Метод закупки:</strong> {obj.procurement_method}</p>
                    <p><strong>Плановая сумма:</strong> {obj.planned_amount}</p>
                    <p><strong>Дата публикации:</strong> {obj.date_published}</p>
                    <p><strong>Срок подачи заявок:</strong> {obj.bids_submission_deadline}</p>
                    <p><a href="{obj.url}">Ссылка на закупку</a></p>
                """
    msg = EmailMultiAlternatives(subject, html_message, from_email, recipient_list)
    msg.attach_alternative(html_message, "text/html")
    msg.send()

