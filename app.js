const bandCard = document.querySelectorAll('.anime');
const mcrFact = document.querySelector('#fmab');
const aeroFact = document.querySelector('#tg');
const lzFact = document.querySelector('#aot');
const trainFact = document.querySelector('#diapt');
const okFact = document.querySelector('#dn');
const msFact = document.querySelector('#ylia');
const gdFact = document.querySelector('#sao');
const kurtFact = document.querySelector('#op');
const creedFact = document.querySelector('#nge');



//Event Listeners
for (var i = 0; i < bandCard.length; i++){
bandCard[i].addEventListener("click", bandCheck);
}
mcrFact.addEventListener('click', mcrDisplay);
aeroFact.addEventListener('click', aeroDisplay);
lzFact.addEventListener('click', lzDisplay);
trainFact.addEventListener('click', trainDisplay);
okFact.addEventListener('click', okDisplay);
msFact.addEventListener('click', msDisplay);
gdFact.addEventListener('click', gdDisplay);
kurtFact.addEventListener('click', kurtDisplay);
creedFact.addEventListener('click', creedDisplay);

//Functions
function bandCheck(e) {
    event.preventDefault();
    console.log(7);
    chosenBand = e.target;
    if (chosenBand.classList.contains('lame')){
        chosenBand.classList.add('red');
    }
 }

 function mcrDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#brother.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
     
 function aeroDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#tokyo.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
 
 function lzDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#attack.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function trainDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#devil.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function okDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#death.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function msDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#april.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function gdDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#sword.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function kurtDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#one.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function creedDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#neon.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
 