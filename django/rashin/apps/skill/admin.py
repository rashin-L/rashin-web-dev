from django.contrib import admin
from .models import Skill, skillGroup



@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('title','skill_group', 'percent', 'icon', 'update_date', 'is_active')
    list_editable = ['is_active', ]
    list_filter = ['is_active', 'skill_group']
    search_fields = [ 'title', ]
    
    
@admin.register(skillGroup)
class skillGroupAdmin(admin.ModelAdmin):
    list_display = ( 'title', 'is_active')
    list_editable = ['is_active', ]
    search_fields = [ 'title' ,]