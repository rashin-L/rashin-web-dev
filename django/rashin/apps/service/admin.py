from django.contrib import admin
from .models import Service



@admin.register(Service)
class serviceAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'update_date', 'is_active')
    list_editable = ['is_active', ]
    list_filter = ['is_active',]
    search_fields = [ 'title', ]
    
    