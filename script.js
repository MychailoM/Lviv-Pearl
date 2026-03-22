const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
const reviewsNum = document.querySelector(".reviews-num");
let index = 0;

function showSlide(i) {
  if (i < 0) index = totalSlides - 1;
  else if (i >= totalSlides) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
  reviewsNum.textContent = `${index + 1}/${totalSlides}`;
}

reviewsNum.textContent = `1/${totalSlides}`;

document.querySelector(".prevSlide").addEventListener("click", () => {
  showSlide(index - 1);
});

document.querySelector(".nextSlide").addEventListener("click", () => {
  showSlide(index + 1);
});


const orderServiceButtons = document.querySelectorAll('.order-service');
const orderFormWrap = document.querySelector('.order-form-wrap');
const closeForm = document.querySelector('.close-form');

// показати форму
orderServiceButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    orderFormWrap.classList.remove('hidden');
  });
});

// сховати форму
closeForm.addEventListener('click', () => {
  orderFormWrap.classList.add('hidden');
});