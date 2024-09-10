firebase.auth().onAuthStateChanged(function (user){
    if(user){
        window.location.href = "index.html";
    }
})

function onChangeEmail(){
    //Função de habilitar/desabiltar botões
    toggleButtonsDisabled();
    //Função exibir/não exibir mensagens de erro do email
    toggleEmailErrors();
}

function onChangePassword(){
    //Função de habilitar/desabiltar botões
    toggleButtonsDisabled();
    //Função para exibir/não exibir mensagens de erro da senha
    togglePasswordErrors();
}

function login(){
        firebase.auth().signInWithEmailAndPassword(
            form.email().value, form.password().value).then(response => {
            window.location.href = "index.html";
        }).catch(error => {
            
        Toastify({
            text: "Usuário não encontrado",
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ef4444",
            },
        }).showToast();
        });
}

function register(){
    window.location.href = "registro.html"
}

//Função para retornar se o email é válido ou inválido
function isEmailValid(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email)
}

//Mostrar ou esconder a mensagem de erro do email
function toggleEmailErrors(){
    const email = form.email().value;

    //Verificação com operadores ternários
    form.emailRequiredError().style.display = email ? "none" : "block"

    //Se o email for inválido, aparece a mensagem de erro 
    if(validateEmail(email)){
        form.emailInvalidError().style.display = "none";
    }
    else if(!email){
        form.emailInvalidError().style.display = "none";
    }
    else{
        form.emailInvalidError().style.display = "block";
    }
}

//Mostrar ou esconder a mensagem de erro da senha
function togglePasswordErrors(){
    const password = form.password().value;

    //Verificação com operadores ternários
    form.passwordRequiredError().style.display = password ? "none" : "block"
}

function toggleButtonsDisabled(){
    //Botão de fazer o login desabilitado se o email não for válido ou se a senha não for válida
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !isEmailValid || !passwordValid
}

//Função para retornar se a senha é válida ou inválida
function isPasswordValid(){
    const password = form.password().value;
    if(!password){
        return false;
    }
    return true;
}

//Refatoração do código para melhor manutenção
const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    botaoLogin: () => document.getElementById("btn-login"),
    botaoLogout: () => document.getElementById("btn-logout")
}