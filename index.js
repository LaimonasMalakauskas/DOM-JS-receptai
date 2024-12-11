document.addEventListener('DOMContentLoaded', () => {

  const rangeInput = document.getElementById("customRange");
  const rangeValue = document.getElementById("rangeValue");

  rangeValue.textContent = rangeInput.valueAsNumber;
  let selectedRecepe = 0;
  
  rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.valueAsNumber;
    let count = rangeInput.valueAsNumber;
    if(selectedRecepe == 1){
      recepe.innerHTML = `<p>Vištienos: ${count*recepe1Ingidiant1} g.</p>
    <p>Sūrio: ${count*recepe1Ingidiant2} g.</p>
    <p>Salotu: ${count*recepe1Ingidiant3} g.</p>`;
    }else if(selectedRecepe == 2){
      recepe.innerHTML = `<p>Miltu: ${count*recepe2Ingidiant1} g.</p>
    <p>Sveistas: ${count*recepe2Ingidiant2} g.</p>
    <p>Pieno: ${count*recepe2Ingidiant3} g.</p>
    <p>Kiaušinių: ${count*recepe2Ingidiant4} vnt.</p>
    <p>Mėlynių: ${count*recepe2Ingidiant5} g.</p>`;
    }else if(selectedRecepe == 3){
      recepe.innerHTML = `<p>Jautienos: ${count*recepe3Ingidiant1} g.</p>
    <p>Sultinio: ${count*recepe3Ingidiant2} g.</p>
    <p>Makaronų: ${count*recepe3Ingidiant3} g.</p>
    <p>Prieskonių: ${count*recepe3Ingidiant4} g.</p>
    <p>Kiaušinių: ${count*recepe3Ingidiant5} vnt.</p>`;
    }
  });

  let card1 = document.querySelector('.card1');
  let card2 = document.querySelector('.card2');
  let card3 = document.querySelector('.card3');

  card1.addEventListener('click', () => {
    selectedRecepe = 1;
    card1.classList.add('active');
    card2.classList.remove('active');
    card3.classList.remove('active');
    let portions = rangeInput.valueAsNumber;
    recepe.innerHTML = `<p>Vištienos: ${portions*recepe1Ingidiant1} g.</p>
    <p>Sūrio: ${portions*recepe1Ingidiant2} g.</p>
    <p>Salotu: ${portions*recepe1Ingidiant3} g.</p>`;
  });

  card2.addEventListener('click', () => {
    selectedRecepe = 2;
    card1.classList.remove('active');
    card2.classList.add('active');
    card3.classList.remove('active');
    let portions = rangeInput.valueAsNumber;
    recepe.innerHTML = `<p>Miltu: ${portions*recepe2Ingidiant1} g.</p>
    <p>Sveistas: ${portions*recepe2Ingidiant2} g.</p>
    <p>Pieno: ${portions*recepe2Ingidiant3} g.</p>
    <p>Kiaušinių: ${portions*recepe2Ingidiant4} vnt.</p>
    <p>Mėlynių: ${portions*recepe2Ingidiant5} g.</p>`;
  });

  card3.addEventListener('click', () => {
    selectedRecepe = 3;
    card1.classList.remove('active');
    card2.classList.remove('active');
    card3.classList.add('active');
    let portions = rangeInput.valueAsNumber;
    recepe.innerHTML = `<p>Jautienos: ${portions*recepe3Ingidiant1} g.</p>
    <p>Sultinio: ${portions*recepe3Ingidiant2} g.</p>
    <p>Makaronų: ${portions*recepe3Ingidiant3} g.</p>
    <p>Prieskonių: ${portions*recepe3Ingidiant4} g.</p>
    <p>Kiaušinių: ${portions*recepe3Ingidiant5} vnt.</p>`;
  });

  let recepe1Ingidiant1 = 100;
  let recepe1Ingidiant2 = 50;
  let recepe1Ingidiant3 = 120;

  let recepe2Ingidiant1 = 120;
  let recepe2Ingidiant2 = 50;
  let recepe2Ingidiant3 = 100;
  let recepe2Ingidiant4 = 2;
  let recepe2Ingidiant5 = 50;

  let recepe3Ingidiant1 = 80;
  let recepe3Ingidiant2 = 50;
  let recepe3Ingidiant3 = 100;
  let recepe3Ingidiant4 = 10;
  let recepe3Ingidiant5 = 1;

  let recepe = document.getElementById('recepe');

});
