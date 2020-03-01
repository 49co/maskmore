# Generated by Django 3.0.3 on 2020-03-01 21:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('maskstore', '0002_auto_20200301_2027'),
    ]

    operations = [
        migrations.AddField(
            model_name='maskproduct',
            name='image',
            field=models.FileField(default=django.utils.timezone.now, upload_to='maskproducts/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='maskproduct',
            name='published_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
