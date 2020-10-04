let planSwitcher = document.getElementById('plan_switcher');
let companyFirstTarifName = document.getElementById('plan_tarif_first_name');
let companySecondTarifName = document.getElementById('plan_tarif_second_name');
let companyFirstTarifPrice = document.getElementById('plan_tarif_first_price');
let companySecondTarifPrice = document.getElementById('plan_tarif_second_price');
let companyFirstTarifButton = document.getElementById('plan_tarif_first_button');
let companySecondTarifButton = document.getElementById('plan_tarif_second_button');
let formInput = document.getElementById('sub_form_input');
let formButton = document.getElementById('sub_form_button');

let planCompetitiveHiddenLi = document.getElementById('plan_competitive_li');
let planMonopolistHiddenLi = document.getElementById('plan_monopolist_li');


function defaultValue() {
    companyFirstTarifName.textContent = 'Starter';
    companySecondTarifName.textContent = 'Pro';
    companyFirstTarifPrice.textContent = 'FREE';
    companySecondTarifPrice.textContent = '$4.99';
    companyFirstTarifButton.textContent = 'Get Started';
    companySecondTarifButton.textContent = 'Make me a Pro';
}

planCompetitiveHiddenLi.style.display = 'none';
planMonopolistHiddenLi.style.display = 'none';

function ifChecked() {
    if (this.checked) {
        companyFirstTarifName.textContent = 'Competitive';
        companySecondTarifName.textContent = 'Monopolist';
        companyFirstTarifPrice.textContent = '$129';
        companySecondTarifPrice.textContent = '$399';
        companyFirstTarifButton.textContent = 'Make me a Competitive';
        companySecondTarifButton.textContent = 'Make me a Monopolist';
        planCompetitiveHiddenLi.style.display = 'block';
        planMonopolistHiddenLi.style.display = 'block';
    }
    else if (!this.checked) {
        defaultValue();
        planCompetitiveHiddenLi.style.display = 'none';
        planMonopolistHiddenLi.style.display = 'none';
    }
}

function clearForm() {
    formInput.value = '';
}

formInput.addEventListener('input',function (event) {
    if (formInput.validity.typeMismatch) {
        formInput.setCustomValidity('I expect an e-mail');
    }
    else {
        formInput.setCustomValidity('');
    }
});



planSwitcher.addEventListener('change',ifChecked); //змінюєм контент в залежності від положення чекбокса
formButton.addEventListener('click',clearForm);  //очищаєш форму