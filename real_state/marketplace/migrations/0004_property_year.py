# Generated by Django 3.0.6 on 2020-06-05 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0003_auto_20200604_1618'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='year',
            field=models.PositiveIntegerField(default=2000),
        ),
    ]
