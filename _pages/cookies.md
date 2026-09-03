---
layout: page
permalink: /cookies/
title: cookies
description: What this site stores on your device, and what it doesn't.
nav: false
---

# Cookies

<br>

**This site sets no cookies.** Not one — not for analytics, not for advertising,
not for sessions. There is nothing to consent to and nothing to opt out of, so
you will never see a cookie banner here.

That is worth stating plainly, because most pages that say something like this
still set a few. You can check mine: open your browser's developer tools,
look under Storage, and the cookie list for this domain will be empty.

## What is stored

Two things, both in your browser's own storage rather than in cookies, both
first-party, and neither one an identifier. Nothing here is sent to me or to
anyone else — it is read only by your own browser, to render the page you asked
for.

| Key            | Where          | What it is                                                                                     | How long it lasts       |
| -------------- | -------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| `theme`        | localStorage   | `light` or `dark`, so the site does not flash the wrong colours on your next visit             | Until you clear it      |
| `name-intro-*` | sessionStorage | A flag saying the animation of my name has already played, so it does not replay on every page | Until you close the tab |

The `theme` value is written on your first visit, before you touch anything: it
starts as whatever your operating system already says it prefers, and changes
only if you use the toggle.

To remove both, clear site data for this domain in your browser settings. The
site works normally afterwards — you will just get the animation once more and
your theme back at the system default.

## Why there is no consent banner

EU law here is the ePrivacy Directive, Article 5(3), which is about storing or
reading information on your device. It is deliberately technology-neutral, so
it covers localStorage just as it covers cookies — "it's not a cookie" is not
a defence, and I am not making that argument.

The reason no consent is needed is the exemption for storage that is strictly
necessary for a service you asked for. The Article 29 Working Party's [Opinion
04/2012](https://ec.europa.eu/justice/article-29/documentation/opinion-recommendation/files/2012/wp194_en.pdf)
names user-interface preferences as an example. A theme setting and a
"do not replay this animation" flag are that and nothing more: no identifier,
no profile, no third party reading them, no way to follow you anywhere.

## Analytics

There are none. No Google Analytics, no Plausible, no Matomo, no Cloudflare
Web Analytics, no tracking pixels, no advertising or affiliate scripts, and no
comment system. Nothing on this site profiles you or measures you.

## What still reaches a third party

Loading any page on the internet reveals your IP address to whoever serves it.
Being straight about who that is here:

- **Cloudflare** serves this site, so it processes requests, including IP
  addresses, in order to deliver the page.
- **jsDelivr** hosts a handful of open-source libraries the pages load
  (jQuery, MathJax, Masonry, medium-zoom and MDBootstrap), so requesting them
  discloses your IP to that CDN.

Fonts used to be in that list and are not any more: Roboto is served from this
domain rather than from Google's, so no request goes to Google when you open a
page here. Two publication-badge scripts, from Altmetric and Dimensions, used
to load on every page as a leftover of the theme this site is built on; they
are switched off.

## Source

Every claim above is checkable — this site is open source, so you do not have
to take my word for any of it.
[Read the code](https://github.com/gregecmaregec/gregecmaregec.github.io).

## Questions

e-mail: gregor.mihelac (at) outlook (dot) com
