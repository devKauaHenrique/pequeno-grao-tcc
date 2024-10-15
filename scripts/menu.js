const btn = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const menuScroll = document.getElementById("ativo");
const menuContent = document.getElementById("menu-content"); 

// Função para fechar o menu
const closeMenu = () => {
    menu.classList.add("hidden");
    menu.style.display = "none";
};

// Clique no botão para abrir/fechar o menu
btn.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que o clique no botão feche o menu
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.style.display = "block";
    } else {
        closeMenu();
    }
});

// Clique na área vazia da div 'menu' (fora dos itens do 'menu-content') para fechar
menu.addEventListener("click", (event) => {
    // Se o clique não for dentro do 'menu-content', fecha o menu
    if (!menuContent.contains(event.target)) {
        closeMenu();
    }
});

// Impede o clique dentro do 'menu-content' de fechar o menu
menuContent.addEventListener("click", (event) => {
    event.stopPropagation(); // Garante que cliques nos itens do menu-content não fechem o menu
});

function activeScroll(){
    if(window.scrollY > 0){
        menuScroll.classList.add("scrolled");
    }
    else{
        menuScroll.classList.remove("scrolled")
    }
}

window.addEventListener('scroll', activeScroll);