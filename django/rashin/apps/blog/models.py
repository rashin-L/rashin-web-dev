# from django.db import models
# from files import FileUpload

# class Service(models.Model):
#     img_upload = FileUpload('images', 'service')  
#     main_img = models.ImageField(upload_to=img_upload.upload_to, verbose_name='تصویر', null=True, blank=True)
#     title = models.CharField(max_length=200,)
#     description = models.TextField()
#     update_date = models.DateTimeField( auto_now=True, null=True, blank=True)
#     is_active = models.BooleanField(default=False)
#     slug = models.SlugField(max_length=30, verbose_name='slug', null=True, unique=True)
    
    
    
    
#     def __str__(self):              
#         return f'{self.slug}'
