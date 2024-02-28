// cookies.js

document.addEventListener("DOMContentLoaded", function () {
  // Check if the user has accepted the cookie policy
  if (!getCookie("cookiePolicyAccepted")) {
      // If not, display the disclaimer
      showCookieDisclaimer();
  }
});

function showCookieDisclaimer() {
  // Create a container for the disclaimer
  var disclaimerContainer = document.createElement("div");
  disclaimerContainer.setAttribute("id", "cookieDisclaimer");

  // Add disclaimer content
  disclaimerContainer.innerHTML = `
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <button onclick="acceptCookiePolicy()">Accept</button>
  `;

  // Append the disclaimer to the body
  document.body.appendChild(disclaimerContainer);
}

function acceptCookiePolicy() {
  // Set a cookie to remember that the user has accepted the policy
  setCookie("cookiePolicyAccepted", "true", 365);

  // Remove the disclaimer from the DOM
  var disclaimerContainer = document.getElementById("cookieDisclaimer");
  if (disclaimerContainer) {
      disclaimerContainer.parentNode.removeChild(disclaimerContainer);
  }
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == " ") {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) == 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}
