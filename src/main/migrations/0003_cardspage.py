# Generated by Django 4.1.5 on 2023-03-08 00:18

from django.db import migrations, models
import django.db.models.deletion
import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks
import wagtail_headless_preview.models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0002_aboutpage"),
    ]

    operations = [
        migrations.CreateModel(
            name="CardsPage",
            fields=[
                (
                    "basepage_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="main.basepage",
                    ),
                ),
                (
                    "intro",
                    wagtail.fields.RichTextField(
                        blank=True,
                        help_text="Describe the cars group's linguistic theme",
                    ),
                ),
                (
                    "cards",
                    wagtail.fields.StreamField(
                        [
                            (
                                "card",
                                wagtail.blocks.StructBlock(
                                    [
                                        (
                                            "image",
                                            wagtail.images.blocks.ImageChooserBlock(
                                                blank=True,
                                                label="image",
                                                null=True,
                                                required=False,
                                            ),
                                        ),
                                        (
                                            "card_title",
                                            wagtail.blocks.CharBlock(
                                                label="Card Title"
                                            ),
                                        ),
                                        (
                                            "card_subtitle",
                                            wagtail.blocks.CharBlock(
                                                help_text="another text string can be used as hint, En translation, etc'",
                                                label="Card Subtitle",
                                                required=False,
                                            ),
                                        ),
                                    ],
                                    form_classname="card",
                                ),
                            )
                        ],
                        use_json_field=True,
                    ),
                ),
            ],
            options={
                "verbose_name": "Cards",
            },
            bases=(
                wagtail_headless_preview.models.HeadlessPreviewMixin,
                "main.basepage",
            ),
        ),
    ]
