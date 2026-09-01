---
layout: page_portfolio
title: portfolio
permalink: /portfolio/
description: selected personal-project interfaces and websites
nav: true
nav_order: 3
---
I've built and am building fraud & anomaly detection systems in Tier1 Banks.

<br>
Below are selected side-projects I've worked on in personal capactiy. 

<div class="projects">
  {% assign portfolio_projects = site.data.portfolio | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in portfolio_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
