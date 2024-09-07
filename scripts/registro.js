firebase.auth().onAuthStateChanged(function (user){
    if(user){
        window.location.href = "index.html"
    }
})

function onChangeName(){
    const name = form.name().value;
    form.nameRequiredError().style.display = name ? "none" : "block";

    toggleRegisterButtonDisable();
}

function onChangeEmail(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none": "block";

    if(validateEmail(email)){
        form.emailInvalidError().style.display = "none";
    }
    else if(!email){
        form.emailInvalidError().style.display = "none";
    }
    else{
        form.emailInvalidError().style.display = "block";
    }

    toggleRegisterButtonDisable();
}

function onChangePassword(){
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? "none" : "block";

    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";

    validatePasswordsMatch();
    toggleRegisterButtonDisable()
}

function onChangeConfirmPassword(){
    validatePasswordsMatch();
    toggleRegisterButtonDisable()
}

function register(){
    const email = form.email().value;
    const password = form.password().value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        window.location.href = "login.html";
    }).catch(error =>{
        alert(getErrorMessage(error))
    })
}

function getErrorMessage(error){
    if(error.code == "auth/email-already-in-use"){
        return "Esse email já está em uso"
    }
    return error.message;
}

// function getErrorMessage(error){
//     if(error.code == "auth/email-already-in-use"){
//         return "Esse email já está em uso"
//     }
//     return error.message;
// }

function validatePasswordsMatch(){
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.confirmPasswordDoesntMatchError().style.display = password == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisable(){
    form.registerButton().disabled = !isFormValid();
}

function isFormValid(){
    const name = form.name().value;
    if(!name){
        return false;
    }

    const email = form.email().value;
    if(!email || !validateEmail(email)){
        return false
    }

    const password = form.password().value;
    if(!password || password.length < 6){
        return false;
    }

    const confirmPassword = form.confirmPassword().value;
    if(password != confirmPassword){
        return false;
    }

    return true;
}

const form = {
    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordMinLengthError: () => document.getElementById("password-min-length-error"),
    registerButton: () => document.getElementById("register-button"),
    name: () => document.getElementById("name"),
    nameRequiredError: () => document.getElementById("name-required-error")
}