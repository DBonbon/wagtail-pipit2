from django.utils.translation import gettext_lazy as _
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField
from wagtail.models import PageManager
from wagtail_headless_preview.models import HeadlessPreviewMixin
from wagtail.core.fields import StreamField
from main.blocks.blocks import CustomRichTextBlock

from .base import BasePage


class ArticlePage(HeadlessPreviewMixin, BasePage):
    rich_text = RichTextField(blank=True, null=True, verbose_name=_("Rich text"))
    body = StreamField(
        [
            ("body", CustomRichTextBlock()),
        ], use_json_field=True
    )

    content_panels = BasePage.content_panels + [
        FieldPanel("rich_text"),
        FieldPanel("body"),
    ]

    extra_panels = BasePage.extra_panels
    serializer_class = "main.pages.ArticlePageSerializer"

    objects: PageManager

    class Meta:
        verbose_name = _("Article")
