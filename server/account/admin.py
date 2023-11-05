from django.contrib import admin

from account.models import User, Complaint


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'phone_number', 'first_name', 'last_name')
    list_display_links = ('id', 'email')


@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'phone_number', )
    list_display_links = ('id', 'phone_number')
