# Generated by Django 3.2.4 on 2021-06-25 00:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='postlocacion',
            name='lng',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True),
        ),
    ]
