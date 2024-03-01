window.onload = () => {
    // Check if the user has scrolled manually
    let userScrolled = false;
    window.addEventListener('scroll', () => {
        userScrolled = true;
    });

    // Scroll down half the width of the screen in 4 seconds
    if (!userScrolled) {
        const screenHeight = window.innerHeight;
        const scrollDistance = screenHeight / 2;
        const scrollDuration = 4000;
        const scrollStep = scrollDistance / scrollDuration * 10;

        let scrollPosition = 0;
        const scrollInterval = setInterval(() => {
            if (scrollPosition >= scrollDistance || userScrolled) {
                clearInterval(scrollInterval);
            } else {
                scrollPosition += scrollStep;
                window.scrollBy(0, scrollStep);
            }
        }, 10);
    }
};
