// Array para armazenar os itens do carrinho
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Função para adicionar item ao carrinho
function addToCart(productRow) {
    const product = {
        image: productRow.querySelector("img").src,
        reference: productRow.cells[1].textContent, // Adiciona a referência
        name: productRow.cells[2].textContent,
        size: productRow.querySelector(".product-size").value,
        color: productRow.querySelector(".product-color").value,
        quantity: productRow.querySelector(".product-quantity").value,
        price: productRow.cells[6].textContent
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    console.log("Produto adicionado ao carrinho:", product);

}

// Função para atualizar a contagem do carrinho no ícone
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

// Função para inicializar os eventos de clique no botão "Incluir no Carrinho"
function initializeAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const productRow = button.closest("tr");
            addToCart(productRow);
        });
    });
}

// Inicializando os botões de adicionar ao carrinho quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    initializeAddToCartButtons();
    updateCartCount();
});
