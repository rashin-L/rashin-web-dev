FROM python:3

ENV PYTHONUNBUFFERED=1
RUN pip install --upgrade pip
WORKDIR /code

COPY requirements.txt .
# RUN pip install -r requirements.txt
RUN pip install -r requirements.txt  --use-deprecated=legacy-resolver
COPY . .
EXPOSE 8000

CMD [ "python", "manage.py", "runserver" ]