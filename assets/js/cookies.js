window.onload = function() {
  // Check if the cookie disclaimer has been accepted
  if (document.cookie.indexOf('cookie_disclaimer_accepted') === -1) {
      // If not, show the disclaimer
      document.getElementById('cookie-disclaimer').style.display = 'block';
  }

  // When the accept button is clicked, set a cookie to remember that the disclaimer has been accepted
  document.getElementById('accept-cookies').onclick = function() {
      var date = new Date();
      date.setFullYear(date.getFullYear() + 1); // Cookie will expire in 1 year
      document.cookie = 'cookie_disclaimer_accepted=true; expires=' + date.toUTCString() + '; path=/';
      document.getElementById('cookie-disclaimer').style.display = 'none';
  };
};