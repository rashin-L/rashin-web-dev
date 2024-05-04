from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-=g21*&obvckcm@u+3)gi^x@igc#t%p7d^dlustndd6hdkal!ap"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    "*",
]


# Application definition

INSTALLED_APPS = [
    "jazzmin",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # 3rd party
    "rest_framework",
    "corsheaders",
    "apps.main.apps.MainConfig",
    "apps.service.apps.ServiceConfig",
    "apps.skill.apps.SkillConfig",
    "apps.project.apps.ProjectConfig",
    "apps.blog.apps.BlogConfig",
    "theme",
    "django_browser_reload",
    "django_render_partial",
    "fontawesomefree",
    "captcha",
    "faicon",
    "tailwind",
]
FAICON_YAML_FILE = "fontawesome/metadata/icons.yml"
FAICON_CSS_URL = "fontawesome/css/all.css"

SILENCED_SYSTEM_CHECKS = ["captcha.recaptcha_test_key_error"]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django_browser_reload.middleware.BrowserReloadMiddleware",
    "corsheaders.middleware.CorsMiddleware",

]
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Add your frontend URL here
]
CORS_ORIGIN_ALLOW_ALL = True

print(f"base is: {BASE_DIR}")
ROOT_URLCONF = "rashin.urls"
import os

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            os.path.join(BASE_DIR, "templates/"),
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "theme.context_processors.theme",
                # 'apps.main.views.media_admin'
            ],
        },
    },
]

WSGI_APPLICATION = "rashin.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'mysql.connector.django',
#         'NAME': 'db_personall1',
#         'USER': 'root',
#         'PASSWORD': '882807',
#         'HOST': 'localhost',
#         'PORT': '3306',
#     }
# }
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        # 'NAME': 'dbreservation',
        "NAME": "dbrashin",
        "USER": "postgres",
        "PASSWORD": "882807r",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}
# DATABASES = {
#     'default': {
#         'ENGINE': 'djongo',
#         'NAME': 'dbrashin',
#         'CLIENT': {
#             'host': '127.0.0.1',
#             'port': 27017,
#             'username': 'rashin',
#             'password': '882807',
#             'authSource': 'dbrashin',
#             'authMechanism': 'SCRAM-SHA-256',
#         },
#     }
# }



# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

# USE_I18N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "static/"
STATICFILES_DIRS = (os.path.join(BASE_DIR, "static"),)


# MEDIA_URL = '/media/'
# STATICFILES_DIRS = (os.path.join(BASE_DIR, 'media/'),)

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

TAILWIND_APP_NAME = "theme"

INTERNAL_IPS = [
    "127.0.0.1",
]
NPM_BIN_PATH = r"C:\Program Files\nodejs\npm.cmd"
