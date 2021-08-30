let addBtn = document.querySelector('#addStaff')
let staffForm = document.querySelector('.manage-form-container');
let staffformClose = document.querySelector('#staffform-close');

addBtn.addEventListener('click',() =>{
    staffForm.classList.add('active');
});


staffformClose.addEventListener('click',() =>{
    staffForm.classList.remove('active');
});