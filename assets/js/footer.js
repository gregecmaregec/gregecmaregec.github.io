function adjustFooterPosition() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var footerHeight = footer.offsetHeight;
    var viewportHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
  
    if (scrollPosition + viewportHeight >= documentHeight - footerHeight) {
      footer.style.position = 'relative';
      footer.style.bottom = 'auto';
    } else {
      footer.style.position = 'fixed';
      footer.style.bottom = '0';
    }
  }
  
  // Adjust footer on page load and when the window is scrolled or resized
  window.onload = adjustFooterPosition;
  window.onscroll = adjustFooterPosition;
  window.onresize = adjustFooterPosition;