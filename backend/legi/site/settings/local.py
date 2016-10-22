import os
from pathlib import Path

SETTINGS_DIR = Path(__file__).parent
SITE_DIR = SETTINGS_DIR.parent
APP_DIR = SITE_DIR.parent
BASE_DIR = APP_DIR.parent

DEBUG = True

ALLOWED_HOSTS = []

SECRET_KEY = '=a&r0c($n#eo!o(r87+9m_ktjuo%gxm54u5pcqp$vf+h45^m&s'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'jshacks-legi',
    }
}

FILE_DIR = BASE_DIR / 'files'
