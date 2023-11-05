from django.contrib import admin

from purchase.models import Purchase


@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = ('id', 'number', 'name_of_company', 'type_of_procurement', 'purchase_name',
                    'procurement_method', 'planned_amount', 'date_published', 'bids_submission_deadline', 'url')