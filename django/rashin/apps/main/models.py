from django.db import models
from files import FileUpload
from django.contrib.auth.models import User

class introduction(models.Model):
    img_upload = FileUpload('images', 'profile')  
    main_img = models.ImageField(upload_to=img_upload.upload_to, null=True, blank=True)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    logo_upload = FileUpload('images', 'logo')  
    logo = models.ImageField(upload_to=logo_upload.upload_to, null=True, blank=True)
    cv_upload = FileUpload('files', 'cv')
    cv = models.FileField(upload_to=cv_upload.upload_to, null=True, blank=True)
    description = models.TextField()
    update_date = models.DateTimeField( auto_now=True, null=True, blank=True)

        
    def __str__(self):              
        return f'{self.first_name}'

# ==================================================================================================

class About(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    icon = models.CharField(max_length=30)  # Material Icon name

    class Meta:
        verbose_name = 'About'
        verbose_name_plural = 'About'

    def __str__(self):
        return self.title
# ==================================================================================================

class contact(models.Model):
    # client = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=30, null=True, blank=True)
    subject = models.CharField(max_length=100)
    message = models.TextField()
    is_seen = models.BooleanField(default=False)
    register_date = models.DateTimeField(auto_now_add=True,)
    
    def __str__(self):
        return f'{self.subject}'
    
# ==================================================================================================

class socialMedia(models.Model):
    linkedin = models.CharField(max_length=100)
    email = models.EmailField()
    gitHub = models.CharField(max_length=100)
    telegram = models.CharField(max_length=150, null=True, blank=True)
    update_date = models.DateTimeField( auto_now=True, null=True, blank=True)
    is_active = models.BooleanField(default=False)
    
    def save(self, *args, **kwargs):
        
        if self.is_active:
            qs = type(self).objects.filter(is_active=True)
            if self.pk:
                qs = qs.exclude(pk=self.pk)
            qs.update(is_active=False) 

        super(socialMedia, self).save(*args, **kwargs)
    
    def __str__(self) -> str:
        return f'{self.email}'