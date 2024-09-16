const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slider-item");
const dots = Array.from(document.querySelectorAll(".slider-dots .dot"));
const captionElement = document.querySelector(".slider-caption");
let currentIndex = 0;
const totalSlides = slides.length;

function updateSlide(index) {
  if (index < 0 || index >= totalSlides) return;

  sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");

  const newCaption = slides[index].getAttribute("data-caption");
  if (captionElement) captionElement.textContent = newCaption;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide(currentIndex);
  });
});

updateSlide(currentIndex);
