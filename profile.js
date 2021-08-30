let addBtn = document.querySelector('#btnNew')
let profileForm = document.querySelector('.profile-form-container');
let profileformClose = document.querySelector('#profileform-close');

addBtn.addEventListener('click',() =>{
    profileForm.classList.add('active');
});


profileformClose.addEventListener('click',() =>{
    profileForm.classList.remove('active');
});