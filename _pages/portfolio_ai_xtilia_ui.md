---
layout: page_portfolio_subpage
title: ai-xtilia-ui
permalink: /portfolio/ai-xtilia-ui/
description: A chat interface for several AI providers, with explicit model selection and nine themes.
nav: false
---

A chat interface for working with several AI providers. You choose the model for each conversation rather than having one chosen for you, and the controls for generation, history, and settings sit in a single panel. The nine themes change colour and contrast only; none of them change the layout.

{% include figure.liquid loading="eager" path="assets/img/portfolio/ai-xtilia-ui/01-controls.png" caption="Generation, history, and settings controls" class="img-fluid rounded z-depth-1" %}

{% include figure.liquid loading="lazy" path="assets/img/portfolio/ai-xtilia-ui/11-model-picker.png" caption="Provider-grouped model picker" class="img-fluid rounded z-depth-1" %}

## Themes

{%- comment -%}
  Each entry is "file|name", so every theme is captioned with its own name
  rather than all nine repeating one label.
{%- endcomment -%}
{% assign themes = "02-default-light.png|Default light,03-warm-light.png|Warm light,04-charcoal.png|Charcoal,05-true-black.png|True black,06-sage.png|Sage,07-blush.png|Blush,08-amber.png|Amber,09-midnight.png|Midnight,10-violet.png|Violet" | split: "," %}
{% for theme in themes %}
  {% assign parts = theme | split: "|" %}
  {% assign theme_path = "assets/img/portfolio/ai-xtilia-ui/" | append: parts[0] %}
  {%- comment -%}
    The include tag takes only plain variables as parameter values, never an
    indexed expression like parts[1], so the name is assigned first.
  {%- endcomment -%}
  {% assign theme_name = parts[1] %}
  {% include figure.liquid loading="lazy" path=theme_path caption=theme_name class="img-fluid rounded z-depth-1" %}
{% endfor %}
