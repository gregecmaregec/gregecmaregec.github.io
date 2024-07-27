---
layout: page_itfa
title: ITFA EL 24 submission
permalink: /itfasubmission/
description: Overview of Artificial Intelligence (AI) and potential applications in the Trade Finance space
nav: true
nav_order: 6
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

As animals occasionally utilize sticks and stones as tools; the human beings command atom bombs, guns, artificial germs, transistors - and most recently, scalable applications of Artificial Intelligence (“AI”). Some argue that attributing intelligence, and with it the title of “AI” to Large Language Models (“LLMs”) like ChatGPT is inappropriate. As per the real-world use of the word, LLMs have been adopted under the term Artificial Intelligence or at least AI-related in academic literature, media, social networks, political debates, regulatory policy, common discourse, by the creators of language models themselves, and by world’s biggest technology companies offering you “AI” services. This submission too, considers current LLMs as a progression in the field of AI.
Each section in the outline of this work is designed to be complete when read on its own. If you stumble upon an unfamiliar words, please also consult the <a href>lexicon<a>

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
