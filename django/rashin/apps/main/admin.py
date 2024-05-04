from django.contrib import admin
from .models import introduction, contact, socialMedia, About



@admin.register(introduction)
class introductionAdmin(admin.ModelAdmin):    
    list_display = ('first_name','last_name','description', 'main_img', 'logo', 'cv', 'update_date')
    # list_editable = ['is_active', ]
    search_fields = ['first_name', ]



@admin.register(About)
class AboutAdmin(admin.ModelAdmin):    
    list_display = ('title','icon','description',)
    search_fields = ['title' ]
    
@admin.register(contact)
class contactAdmin(admin.ModelAdmin):    
    list_display = ('first_name','last_name', 'subject', 'message', 'email', 'mobile_number', 'is_seen', 'register_date')
    list_editable = ['is_seen', ]
    search_fields = ['subject', ] 


@admin.register(socialMedia)
class socialMediaAdmin(admin.ModelAdmin):    
    list_display = ('email','linkedin','gitHub', 'telegram', 'update_date', 'is_active',)
    list_editable = ['is_active', ]
    search_fields = ['email', ]  