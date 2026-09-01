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
Below are selected side-projects I've worked on in personal capacity. 
<br><br>

{% assign portfolio_projects = site.data.portfolio | sort: "importance" %}
<div class="pf-grid">
  {% for project in portfolio_projects %}
    {% include portfolio_card.liquid %}
  {% endfor %}
</div>
