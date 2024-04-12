function adjustFooterPosition() {
    var footer = document.getElementById('footer');
    if (document.body.scrollHeight > window.innerHeight) {
      footer.style.position = 'static';
    } else {
      footer.style.position = 'fixed';
    }
  }
  
  // Adjust footer on page load and when new content is added or window is resized
  window.onload = adjustFooterPosition;
  window.onresize = adjustFooterPosition;
  // Optionally, call adjustFooterPosition when new content is dynamically added to the page
  