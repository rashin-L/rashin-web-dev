
from django.contrib import admin
from django.urls import path, include
from theme.views import change_theme
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [    
    path('',include('apps.main.urls', namespace='main')),
    path('faicon/', include('faicon.urls')),
    path('admin/', admin.site.urls),
    path('service',include('apps.service.urls', namespace='service')),
    path('skill/', include('apps.skill.urls', namespace='skill')),
    path('project/',include('apps.project.urls', namespace='project')),
    path('blog',include('apps.blog.urls', namespace='blog')),
    path('switch_theme', change_theme, name='change-theme'),
    
    path("__reload__/", include("django_browser_reload.urls")),
    path(
        'render_icon_list_modal/',
        TemplateView.as_view(
            template_name='faicon_modal.html'
        ),
        name='faicon-modal'
    ),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# handler404 = "django_404_project.views.error_403"
# handler404 = 'apps.main.views.error_404'