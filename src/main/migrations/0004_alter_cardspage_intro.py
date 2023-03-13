# Generated by Django 4.1.5 on 2023-03-08 00:58

from django.db import migrations
import wagtail.fields


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0003_cardspage"),
    ]

    operations = [
        migrations.AlterField(
            model_name="cardspage",
            name="intro",
            field=wagtail.fields.RichTextField(
                blank=True,
                help_text="Describe the cars group's linguistic theme",
                verbose_name="Intro",
            ),
        ),
    ]