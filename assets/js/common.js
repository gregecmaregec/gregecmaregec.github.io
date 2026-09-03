$(document).ready(function () {
  const nameContext = (lockup) => (lockup.classList.contains("navbar-brand") ? "navbar" : "landing");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('.name-lockup[data-animation-state="playing"]').forEach((lockup) => {
    const completeAnimation = () => {
      lockup.dataset.animationState = "complete";
    };
    const nameSweep = lockup.querySelector(".name-gradient-sweep");
    const context = nameContext(lockup);
    const introSuppressed = document.documentElement.getAttribute("data-name-intro-" + context) === "done";

    try {
      localStorage.setItem("name-intro-" + context, "1");
    } catch (e) {
      // Storage blocked. The animation can still play.
    }

    if (introSuppressed || prefersReducedMotion || !nameSweep) {
      completeAnimation();
      return;
    }

    nameSweep.addEventListener(
      "animationend",
      (event) => {
        if (event.animationName === "name-gradient-sweep") completeAnimation();
      },
      { once: true }
    );
  });

  // add toggle functionality to abstract and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });
});
