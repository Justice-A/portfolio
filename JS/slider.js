$(document).ready(function () {
  //second slider
  $(".portfolio-slider").slick({
    dots: true, // Show navigation dots
    arrows: true, // Disable navigation arrows
    infinite: true, // Enable infinite scroll
    slidesToShow: 2, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1, // Adjust visible slides for smaller screens
        },
      },
    ],
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sideBar = document.getElementById("side-bar");
  const navLinks = sideBar.querySelectorAll("a");
  const overlay = document.querySelector(".overlay");

  // Toggle the sidebar on clicking the hamburger
  hamburger.addEventListener("click", function () {
    sideBar.classList.toggle("show");
    overlay.style.display = sideBar.classList.contains("show")
      ? "block"
      : "none";
  });

  // Close sidebar when any nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      sideBar.classList.remove("show");
      overlay.style.display = "none";
    });
  });

  // Close sidebar when clicking outside the sidebar
  document.addEventListener("click", function (e) {
    if (!sideBar.contains(e.target) && !hamburger.contains(e.target)) {
      sideBar.classList.remove("show");
      overlay.style.display = "none";
    }
  });

  // Close sidebar when clicking the overlay
  overlay.addEventListener("click", function () {
    sideBar.classList.remove("show");
    overlay.style.display = "none";
  });
});
