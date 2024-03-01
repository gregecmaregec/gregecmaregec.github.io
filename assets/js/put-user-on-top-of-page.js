document.addEventListener('DOMContentLoaded', function() {
  // Check if the flag is set in sessionStorage
  if (!sessionStorage.getItem('visited')) {
    // Set the flag in sessionStorage
    sessionStorage.setItem('visited', true);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }
});