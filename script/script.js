// Espera até que o conteúdo da página esteja carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões de adicionar ao carrinho
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Adiciona um ouvinte de evento de clique para cada botão
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Evita o comportamento padrão do link ou botão (não redireciona a página)
            event.preventDefault();

            // Obtém o nome do carro a partir do atributo data-name do botão
            const carName = button.getAttribute('data-name');

            // Exibe um alerta informando que o carro foi adicionado ao carrinho
            alert(`${carName} foi adicionado ao carrinho!`);

     
        });
    });
});

// Espera até que o conteúdo da página esteja carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões de compra
    const compraButtons = document.querySelectorAll('.add-to-cart');

    // Adiciona um ouvinte de evento de clique para cada botão
    compraButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Evita o comportamento padrão do link ou botão
            event.preventDefault();

            // Obtém o nome e o preço do carro a partir dos atributos data-* do botão
            const carName = button.getAttribute('data-name');
            const carPrice = button.getAttribute('data-price');

            // Exibe um alerta com a mensagem personalizada
            alert(`${carName} foi comprado com sucesso por R$ ${parseFloat(carPrice).toLocaleString('pt-BR')}`);
          
            // Opcional: Adicionar lógica para atualizar o carrinho (se necessário)
            // Exemplo: atualizar o contador de itens no carrinho (se houver esse recurso)
            let cartCount = document.getElementById('cart-count');
            cartCount.textContent = parseInt(cartCount.textContent) + 1; // Incrementa o contador
        });
    });
});
