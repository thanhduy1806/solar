# Generated by Django 5.2.3 on 2025-06-18 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_stringsolardata'),
    ]

    operations = [
        migrations.CreateModel(
            name='NameString',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('string_name', models.TextField()),
            ],
            options={
                'db_table': 'string_name',
                'managed': False,
            },
        ),
        migrations.AlterModelTable(
            name='stringsolardata',
            table='string_data',
        ),
    ]
