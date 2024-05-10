let slideIndex = 0;
showSlides(slideIndex, false);

function showSlides(flag) {
  let slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    if (i !== slideIndex) slides[i].style.display = 'none';
    else slides[i].style.display = 'block';
  }
  slideIndex++;
  if (!flag) setTimeout(showSlides, 5000); 
}

function changeSlide(n) {
  slideIndex += (n - 1);
  showSlides(true);
}