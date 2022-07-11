function imgSlider(anything) {
  document.querySelector('.casas').src = anything;
}

function changeCircleColor(color) {
  let circulo = document.querySelector('.circulo');
  circulo.style.background = color;
}

function toggleMenu() {
  let menuToggle = document.querySelector('.toggle');
  let navegacao = document.querySelector('.navegacao');
  menuToggle.classList.toggle('active');
  navegacao.classList.toggle('active');
}