---
layout: page_portfolio_subpage
title: ai-xtilia-ui
permalink: /portfolio/ai-xtilia-ui/
description: A model-agnostic conversation interface with expressive themes and deliberate model routing.
nav: false
---

This interface explores a calmer way to work across multiple AI providers. The project focuses on readable conversations, explicit model selection, useful controls, and themes that change the character of the workspace without changing its structure.

{% include figure.liquid loading="eager" path="assets/img/portfolio/ai-xtilia-ui/01-controls.png" title="Generation, history, and settings controls" class="img-fluid rounded z-depth-1" %}

{% include figure.liquid loading="lazy" path="assets/img/portfolio/ai-xtilia-ui/11-model-picker.png" title="Provider-grouped model picker" class="img-fluid rounded z-depth-1" %}

## Themes

{% assign theme_files = "02-default-light.png,03-warm-light.png,04-charcoal.png,05-true-black.png,06-sage.png,07-blush.png,08-amber.png,09-midnight.png,10-violet.png" | split: "," %}
{% for theme_file in theme_files %}
  {% assign theme_path = "assets/img/portfolio/ai-xtilia-ui/" | append: theme_file %}
  {% include figure.liquid loading="lazy" path=theme_path title="Xtillia AI theme" class="img-fluid rounded z-depth-1" %}
{% endfor %}
