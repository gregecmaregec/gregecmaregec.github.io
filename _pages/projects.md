---
layout: page_itfa
title: ITFA EL 2024 submission
permalink: /itfasubmission/
nav: true
nav_order: 6
horizontal: false
og_title: "ITFA EL 2024 submission"
og_description: "Demystifying AI for use cases in International Trade"
og_image: "https://gregormihelac.com/assets/img/itfa/foreword_thumbnail.jpg"
og_url: "https://gregormihelac.com/itfasubmission/"
og_type: "website"
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% if category = "itfa" %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects_cb = site.projects | where: "category", category %}
  {% assign sorted_projects_cb = categorized_projects | sort: "importance" %}
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
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | where_exp: "project", "project.category = 'itfa'" | sort: "importance" %}

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

<br>
<div class="caption">
    This project won ITFA 2024 Emerging Leaders competition in Cyprus
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itfa/itfa-logo.png" title="itfa" class="img-fluid3 rounded z-depth-1"%}
    </div>
</div>
