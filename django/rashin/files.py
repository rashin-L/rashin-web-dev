import os
from uuid import uuid4
from django.utils.deconstruct import deconstructible




def correct_url(url):

    str_url = str(url)    
    c_url = str_url.replace('static/',"")
    return c_url

@deconstructible
class FileUpload:
    def __init__(self, dir, prefix):
        self.dir = dir
        self.prefix = prefix
        
    def upload_to(self, instance, filename):
        filename, ext = os.path.splitext(filename)
        return f'static/media/{self.dir}/{self.prefix}/{uuid4()}{ext}'
    
