---
layout: page_portfolio
title: portfolio
permalink: /portfolio/
description: selected product interfaces and websites
nav: true
nav_order: 3
---

<div class="projects">
  {% assign portfolio_projects = site.data.portfolio | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in portfolio_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
