
const carouselPages = document.querySelector('.carousel-pages');
const pages = document.querySelectorAll('.carousel-page');
const totalPages = pages.length;
let currentPage = 0;
const indicatorsContainer = document.createElement('div');
indicatorsContainer.classList.add('carousel-indicators');
for (let i = 0; i < totalPages; i++) {
  const dot = document.createElement('span');
  dot.classList.add('indicator');
  dot.setAttribute('data-index', i);
  if (i === 0) dot.classList.add('active');
  indicatorsContainer.appendChild(dot);
}

document.querySelector('.products-carousel').appendChild(indicatorsContainer);

function updateCarousel() {
  const pageWidth = carouselPages.offsetWidth;
  carouselPages.style.transform = `translateX(-${currentPage * pageWidth}px)`;
  
  const dots = document.querySelectorAll('.carousel-indicators .indicator');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentPage].classList.add('active');
}

document.querySelectorAll('.carousel-indicators .indicator').forEach(dot => {
  dot.addEventListener('click', () => {
    currentPage = Number(dot.getAttribute('data-index'));
    updateCarousel();
  });
});

updateCarousel();

window.addEventListener('resize', updateCarousel);
