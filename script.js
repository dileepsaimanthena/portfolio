
// Get a reference to the scroll-to-top button
const scrollToTopButton = document.getElementById('scrollToTop');

// Add a scroll event listener to check the scroll position
window.addEventListener('scroll', () => {
  // Check if the page is scrolled down by at least a certain amount (e.g., 200 pixels)
  if (window.scrollY > 200) {
    // If scrolled down, show the button
    scrollToTopButton.style.display = 'flex';
  } else {
    // If at the top, hide the button
    scrollToTopButton.style.display = 'none';
  }
});

// Add a click event listener to scroll back to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

$(document).ready(function () {
  $(".carousel").owlCarousel({
    items: 3, // Show three logos at a time
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // Show one logo on smaller screens
      },
      600: {
        items: 2, // Show two logos on medium screens
      },
      1000: {
        items: 3, // Show three logos on large screens
      },
    },
  });
});
