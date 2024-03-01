// Place user at the top of the page
window.scrollTo(0, 0);

// Variable to track if user has scrolled
let hasScrolled = false;

// Function to handle scroll event
function handleScroll() {
    hasScrolled = true;
    window.removeEventListener('scroll', handleScroll);
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Wait for 4 seconds
setTimeout(() => {
    // Check if user has scrolled
    if (!hasScrolled) {
        // Calculate the target position to scroll to
        const targetPosition = window.innerWidth / 2;

        // Calculate the duration of the scroll animation
        const duration = 6000;

        // Calculate the distance to scroll per frame
        const distancePerFrame = targetPosition / (duration / 16.7); // Assuming 60 frames per second

        // Variable to track the current scroll position
        let currentPosition = 0;

        // Function to perform smooth scrolling animation
        function smoothScroll() {
            currentPosition += distancePerFrame;
            window.scrollTo(currentPosition, 0);

            if (currentPosition < targetPosition) {
                requestAnimationFrame(smoothScroll);
            }
        }

        // Start the smooth scrolling animation
        smoothScroll();
    }
}, 4000);