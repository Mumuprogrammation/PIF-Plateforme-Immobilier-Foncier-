//recuperation des elements
const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const pass = document.querySelector("#pass")
const pass1 = document.querySelector("#pass1")

form.addEventListener('submit',e =>{
    e.preventDefault();

    form_verify();
})

//Fonctions
function form_verify(){
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const pass1Value = pass1.value.trim();

    //Verification du nom
    if(userValue === ""){
        let message = "Le nom ne peut etre vide";
        setError(username, message)
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message = "Le nom doit commencer par une lettre";
        setError(username, message)
    }else{
        setSucces(username);
    }

    if(emailValue === ""){
        let message = "L'email ne peut etre vide";
        setError(email, message);
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email, message)
    }else{
        setSucces(email)
    }

    if(passValue === ""){
        let message = "Le mot de passe ne peut etre vide";
        setError(pass, message)
    }else if(!password_verify(passValue)){
        let message = "Le mot de passe est faible en caractere (8 à 12)";
        setError(pass, message)
    }else{
        setSucces(pass);
    }

    if(pass1Value === ""){
        let message = "Le mot de passe ne peut etre vide"
        setError(pass1Value, message)
    }else if(pass1Value !== passValue){
        let message = "Les mots de passe ne correspondent pas"
        setError(pass1Value, message)
    }else{
        setSucces(pass1)
    }
}

function setError(elem, message){
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small')

    //Ajout du message d'erreur
    small.innerText = message

    //Ajout de la classe error
    formControl.className = "form-control error";
}

function setSucces(elem){
    const formControl = elem.parentElement;
    formControl.className = 'form-control succes'
}

function email_verify(email){
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}

function password_verify(pass){
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(pass)
}