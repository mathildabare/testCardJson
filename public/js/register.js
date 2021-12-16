/*
 * PAGE :  REGISTER
 ************************/

console.log('Register JS');


/******  Déclarations Constantes ********/

// Check Conditions Générales
const cg = document.getElementById('cg')

// Affichage du message d'erreur
const warnMessage = document.getElementById('prevent')
warnMessage.style.color = 'red'
warnMessage.style.fontSize = '8pt'

// Submit Button
const submitBtn = document.getElementById('submit-btn')

// Mot de Passe
const pw = document.getElementById('pw')

// Confirmation du Mot de Passe
const pwConfirm = document.getElementById('pw-confirm')




/******  Conditions  ********/

submitBtn.addEventListener('click', function (e) {
    if (pw.value !== pwConfirm.value) {
        e.preventDefault(), warnMessage.innerText = 'Passwords are different', console.log('different password'), pw.style.border = "1px solid red"
        pwConfirm.style.border = "1px solid red";
    } else if (pw.value === "") {
        e.preventDefault(), warnMessage.innerText = 'Password is empty', console.log('empty password'), pw.style.border = "1px solid red", pwConfirm.style.border = "";
    } else if (!cg.checked) {
        e.preventDefault(), warnMessage.innerText = 'You have to accept the terms of use to continue.',pw.style.border = "", pwConfirm.style.border = "";
    }
})


