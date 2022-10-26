'use strict';

//Selectors
let mess = document.querySelector('.mess-with-me');
let paraMess = document.querySelector('p.mess-with-me');
let hidden = document.querySelector('#hide-me');
let tric = document.querySelector('#triceratops');
let feathered = document.querySelector('#feathers');
let togButt = document.querySelector('#toggle');
let big = document.querySelector('#biggify');
let dinoRow = document.querySelector('#row');
////////////////////////////////////////////////////////////////



//Style changes
mess.style.fontSize = '40px';

paraMess.style.background = 'green';

hidden.style.display = 'none';

tric.style.width = '324px';
//////////////////////////////////////////////////////////////



//Event Listeners
mess.addEventListener('click', () => {
  mess.style.color = 'orange';
});

tric.addEventListener('click', () => {
  tric.style.border = 'solid red';
});

feathered.addEventListener('click', () => {
  feathered.style.opacity = '50%';
});

togButt.addEventListener('click', () => {
  if(dinoRow.style.background === ''){
  dinoRow.style.background = 'lightblue';
  }else{
  dinoRow.style.background = '';
  }

});

big.addEventListener('mouseenter', () => {
  big.style.width = '200px';
});

big.addEventListener('mouseleave', () => {
  big.style.width = '';
});