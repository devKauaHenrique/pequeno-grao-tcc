const carrinho = document.getElementById("carrinho");
const cartBtn = document.getElementById("cart-btn");
const cartBtn2 = document.getElementById("cart-btn-2");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const cartCounter2 = document.getElementById("cart-count-2");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

let cart = [];

//Abrir o carrinho no mobile
cartBtn.addEventListener("click", function () {
    cartModal.style.display = "flex"
})

//Abrir o carrinho no desktop
cartBtn2.addEventListener("click", function () {
    updateCartModal();
    cartModal.style.display = "flex"
})

//Fechar o carrinho quando clicar fora
cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

//Fechar o modal quando clica no "fechar"
closeModalBtn.addEventListener("click", function () {
    cartModal.style.display = "none"
})

carrinho.addEventListener("click", function (event) {
    let parentButton = event.target.closest(".add-to-cart-btn")

    if (parentButton) {
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        //Adicionar ao carrinho
        addToCart(name, price)
    }
})

//Função para adicionar no carrinho
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name)

    //Se já existe um item igual no carrinho
    if (existingItem) {
        existingItem.quantity += 1;

        Toastify({
            text: "Esse item já existe no carrinho",
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#f8b31e",
            },
        }).showToast();
    }
    else {
        cart.push({
            name,
            price,
            quantity: 1,
        })

        updateCartModal();

        Toastify({
            text: "Adicionado no carrinho",
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#15c301",
            },
        }).showToast();
    }

    return;

}

//Atualiza o carrinho
function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

        cartItemElement.innerHTML = `
        <div class="flex items-center justify-between"> 
            <div> 
                <p class="font-bold text-xl">${item.name}</p>
                <p>Quantidade: ${item.quantity}</p>
                <p class="font-bold mt-1">R$ ${item.price.toFixed(2)}</p>
            </div>

            <button class="remove-from-cart-btn bg-vermelho hover:bg-vermelho-escuro text-white font-medium rounded px-4 py-1 transition duration-700 ease-in-out" data-name="${item.name}">
                Remover
            </button>

        </div>
        `

        total += item.price * item.quantity;

        cartItemsContainer.appendChild(cartItemElement);
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    cartCounter.innerHTML = `(${cart.length})`;
    cartCounter2.innerHTML = `(${cart.length})`;
}

//Para remover o item do carrinho
cartItemsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-from-cart-btn")) {
        const name = event.target.getAttribute("data-name");

        removeItemCart(name);

        Toastify({
            text: "Item removido",
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ef4444",
            },
        }).showToast();
    }
})

function removeItemCart(name) {
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        const item = cart[index];

        if (item.quantity > 1) {
            item.quantity -= 1;
            updateCartModal();
            return;
        }

        cart.splice(index, 1);
        updateCartModal();
    }
}

//Pegar o Endereço
addressInput.addEventListener("input", function (event) {
    let inputValue = event.target.value;

    if (inputValue !== "") {
        addressInput.classList.remove("border-red-500")
        addressWarn.classList.add("hidden")
    }
})

//Finalizar o pedido
checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) return;
    if (addressInput.value === "") {
        addressWarn.classList.remove("hidden");
        addressInput.classList.add("border-red-500");
        return;
    }

    //Enviar pedido para o whatsapp
    const cartItems = cart.map((item) => {
        return (
            `(${item.quantity}) ${item.name} - Preço: R$${item.price} - Endereço: ${addressInput.value}`
        )
    }).join("||")

    const message = encodeURIComponent(cartItems)
    const phone = "5511953736849"

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

    cart = [];
    updateCartModal();
})

