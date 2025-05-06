$(document).ready(function () {
  //second slider
  $(".portfolio-slider").slick({
    dots: true, // Show navigation dots
    arrows: false, // Disable navigation arrows
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

const hamburger = document.getElementById("hamburger");
const sideBar = document.getElementById("side-bar");

// Toggle the sidebar on clicking the hamburger
hamburger.addEventListener("click", function () {
  sideBar.classList.toggle("show");
});
