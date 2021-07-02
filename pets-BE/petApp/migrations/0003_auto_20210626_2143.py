# Generated by Django 3.2.4 on 2021-06-27 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petApp', '0002_postlocacion_lng'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postlocacion',
            name='lat',
            field=models.DecimalField(blank=True, decimal_places=15, max_digits=18, null=True),
        ),
        migrations.AlterField(
            model_name='postlocacion',
            name='lng',
            field=models.DecimalField(blank=True, decimal_places=15, max_digits=18, null=True),
        ),
    ]