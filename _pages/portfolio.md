---
layout: page_portfolio
title: portfolio
permalink: /portfolio/
description: interfaces and websites I built on my own time
nav: true
nav_order: 3
---
I build fraud and anomaly detection systems at Tier 1 banks.
<br>
Below are side projects I built on my own time.
<br><br>

{% assign portfolio_projects = site.data.portfolio | sort: "importance" %}
<div class="pf-grid" id="pf-grid">
  {% for project in portfolio_projects %}
    {% include portfolio_card.liquid index=forloop.index %}
  {% endfor %}
</div>

<script>
  // Hold the grid until the above-the-fold images have decoded, so the cards
  // arrive complete instead of filling in behind the text.
  //
  // Only the eager images are awaited. The lazy ones below the fold do not load
  // until they are scrolled near, so waiting on those would hold the grid until
  // the timeout every single time.
  //
  // The class is added here rather than sitting in the stylesheet: with
  // JavaScript off this script never runs, and the grid is simply visible from
  // the start rather than hidden forever.
  (function () {
    var grid = document.getElementById("pf-grid");
    if (!grid) return;

    grid.classList.add("pf-grid--holding");
    var release = function () {
      grid.classList.remove("pf-grid--holding");
    };

    var images = Array.prototype.slice.call(grid.querySelectorAll('img[loading="eager"]'));
    var pending = images.length;
    if (!pending) return release();

    var settle = function () {
      if (--pending <= 0) release();
    };

    images.forEach(function (image) {
      // A cached image can already be done before this runs.
      if (image.complete && image.naturalWidth) return settle();
      image.addEventListener("load", settle, { once: true });
      image.addEventListener("error", settle, { once: true });
    });

    // A stalled or blocked request must never leave the page looking empty.
    setTimeout(release, 2000);
  })();
</script>
