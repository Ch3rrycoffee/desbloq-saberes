const wrapper = document.querySelector('.wrapper .inner');
const buttons = document.querySelectorAll('.map button');
const cardWidth = 320; 
const visibleCards = 3;
const totalCards = document.querySelectorAll('.cardslider').length;

function showSlide(index) {
 
  let offset = index;
  if (offset < 0) offset = 0;
  if (offset > totalCards - visibleCards) offset = totalCards - visibleCards;

  wrapper.style.transform = `translateX(-${offset * cardWidth}px)`;
  buttons.forEach(btn => btn.classList.remove('active'));
  if (buttons[index]) buttons[index].classList.add('active');
}

buttons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    showSlide(idx);
  });
});


showSlide(0);


  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });
