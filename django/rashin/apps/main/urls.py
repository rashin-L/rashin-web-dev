from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    # path('', views.index, name='index'),
    # path('header', views.introductionView, name='introduction'),
    # # path('main_img', views.main_img, name='main_img'),
    # path('logo', views.nav, name='nav'),
    # path('download_cv', views.download_cv, name='download_cv'),
    # path('contact_form', views.contact_form, name='contact_form'),
    # path('footer', views.footer, name='footer'),

    # serializer
    path('info', views.introductionSerView.as_view(), name='info'),
    path('about', views.AboutSerView.as_view(), name='about'),
    path('social', views.socialSerView.as_view(), name='social'),
    path('contact', views.ContactAPI.as_view(), name='contact'),

]
    