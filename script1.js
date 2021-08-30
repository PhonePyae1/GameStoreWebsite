let addBtn = document.querySelector('#addGames')
let gameForm = document.querySelector('.game-form-container');
let gameformClose = document.querySelector('#gameform-close');

addBtn.addEventListener('click',() =>{
    gameForm.classList.add('active');
});


gameformClose.addEventListener('click',() =>{
    gameForm.classList.remove('active');
});