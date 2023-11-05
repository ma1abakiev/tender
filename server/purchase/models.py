from django.db import models


class Purchase(models.Model):
    STATUS_CHOICES = (
        ('active', 'активный'),
        ('canceled', 'отмененный'),
        ('completed', 'завершенный'),
    )
    TYPE_OF_PROCUREMENT_CHOICES = (
        ('Goods', 'товары'),
        ('work', 'работы'),
        ('services', 'услуги')
    )
    PROCUREMENT_METHOD_CHOICES = (
        ('One stage', 'неограниченный'),
        ('Simplified', 'простой')
    )
    number = models.PositiveIntegerField(unique=True)
    name_of_company = models.CharField(max_length=255)
    type_of_procurement = models.CharField(max_length=255, choices=TYPE_OF_PROCUREMENT_CHOICES)
    purchase_name = models.CharField(max_length=255)
    planned_amount = models.FloatField()
    procurement_method = models.CharField(max_length=255, choices=PROCUREMENT_METHOD_CHOICES)
    date_published = models.DateTimeField()
    bids_submission_deadline = models.DateTimeField()
    status = models.CharField(max_length=15, choices=STATUS_CHOICES)
    url = models.URLField()

    class Meta:
        ordering = ['-date_published']

