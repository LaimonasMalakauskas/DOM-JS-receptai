document.addEventListener('DOMContentLoaded', () => {

  const rangeInput = document.getElementById("customRange");
  const rangeValue = document.getElementById("rangeValue");

  rangeValue.textContent = rangeInput.value;

  rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.value;
  });

  let card1 = document.querySelector('.card1');
  let card2 = document.querySelector('.card2');
  let card3 = document.querySelector('.card3');

  card1.addEventListener('click', () => {
    card1.classList.add('active');
    card2.classList.remove('active');
    card3.classList.remove('active');
    // console.log('clicked1');
  });

  card2.addEventListener('click', () => {
    card1.classList.remove('active');
    card2.classList.add('active');
    card3.classList.remove('active');
    // console.log('clicked2');
  });

  card3.addEventListener('click', () => {
    card1.classList.remove('active');
    card2.classList.remove('active');
    card3.classList.add('active');
    // console.log('clicked3');
  });
});
