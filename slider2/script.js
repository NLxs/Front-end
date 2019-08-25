document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slideCount = document.querySelectorAll(".slider-item").length;
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  
  prevButton.addEventListener("click", prevSlide, false);
  nextButton.addEventListener("click", nextSlide, false);
  
  let slide = 0;
  
  function prevSlide() {
    slide = (slide - 1);
    if(slide < 0) { slide = slideCount - 1 }
    slider.style.left = -(slide * 100) + "%";
  }

  function nextSlide() {
    slide = (slide + 1) % slideCount;
    slider.style.left = -(slide * 100) + "%";
  }
  
  setInterval(nextSlide, 5000);
}, false)