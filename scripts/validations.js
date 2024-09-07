//Função para verificar se o email é válido
function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}