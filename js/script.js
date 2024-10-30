// JavaScript to change the style of the navbar when scrolled
window.onscroll = function() {
  const navbar = document.getElementById("navbar");
  
  // Add class "scrolled" when the page is scrolled 50px or more
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
