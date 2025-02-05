---
layout: page_cb
title: Commerzbank Trainee 2025 application
permalink: /cb-application/
nav: false
horizontal: false
og_title: "Commerzbank Application - GM"
og_description: "Appliyng to a superb institution"
og_image: "https://gregormihelac.com/assets/img/itfa/foreword_thumbnail.jpg"
og_url: "https://gregormihelac.com/cb-application/"
og_type: "website"
---

<!-- pages/projects_cb.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  {% assign categorized_projects_cb = site.projects | where: "category", "cb" %}
  {% assign sorted_projects_cb = categorized_projects_cb| sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects_cb %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects_cb %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects_cb = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects_cb %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects_cb %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
