
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
    items: 4,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
});
$(document).ready(function () {
  // Initialize variables
  var currentIndex = 0;
  var items = $("#dynamic-texts li");
  
  // Function to show the current li and hide the rest
  function showItem(index) {
    items.hide();
    items.eq(index).show();
  }
  
  // Initial display
  showItem(currentIndex);
  
  // Interval to switch to the next li
  setInterval(function () {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }, 4000); // Adjust the interval time (in milliseconds) as needed
});
