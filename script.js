// Project section counter js

const images = document.querySelectorAll(".image-box");
const counter = document.querySelector(".counter");
const circle = document.querySelector(".progress-ring-circle");

let index = 0;

function animateCircle() {
  circle.style.transition = "none";
  circle.style.strokeDashoffset = 163;

  setTimeout(() => {
    circle.style.transition = "stroke-dashoffset 3s linear";
    circle.style.strokeDashoffset = 0;
  }, 50);
}

function showImage() {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");

  counter.innerText = index + 1;

  animateCircle();

  index++;
  if (index >= images.length) index = 0;
}

// first load
showImage();

// auto loop
setInterval(showImage, 3000);

// News section arrow js
const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    slides.forEach((s) => s.classList.remove("active"));
    slide.classList.add("active");
  });
});

// Community section image slide
const communityWrapper = document.querySelector(".community-image-wrapper");
const communityBoxes = document.querySelectorAll(".community-image-box");

let communityIndex = 0;
const visibleCount = 4; // 👈 ek row me 4 images
let boxWidth = communityBoxes[0].offsetWidth + 10; // gap include (10px)

/* 🔥 Clone first 4 boxes */
for (let i = 0; i < visibleCount; i++) {
  const clone = communityBoxes[i].cloneNode(true);
  communityWrapper.appendChild(clone);
}

/* 🔄 Slide function */
function slideCommunity() {
  communityIndex++;

  communityWrapper.style.transition = "transform 0.6s ease";
  communityWrapper.style.transform = `translateX(-${communityIndex * boxWidth}px)`;

  /* 🔥 Reset without jump */
  if (communityIndex === communityBoxes.length) {
    setTimeout(() => {
      communityWrapper.style.transition = "none";
      communityIndex = 0;
      communityWrapper.style.transform = `translateX(0px)`;
    }, 600);
  }
}

/* ⏱ Auto slide */
setInterval(slideCommunity, 2500);

/* 📱 Responsive fix */
window.addEventListener("resize", () => {
  boxWidth = communityBoxes[0].offsetWidth + 10;
});