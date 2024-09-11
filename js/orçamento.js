//BOTÃO DE CONTROLE DE QUANTIDADE
function decrementQuantity(inputId) {
  var input = document.getElementById(inputId);
  var value = parseInt(input.value);
  if (value > 0) {
    input.value = value - 1;
  }
  updateTotal(); // Atualiza o total após diminuir a quantidade, inclusive para 0
}

function incrementQuantity(inputId) {
  var input = document.getElementById(inputId);
  var value = parseInt(input.value);
  input.value = value + 1;
  updateTotal(); // Atualiza o total após aumentar a quantidade
}

function updateTotal() {
  var total = 0.00;
  var totalQuantity = 0; // Para rastrear o número total de itens no carrinho
  var itemQuantities = [
    { id: 'quantity1', price: 2.50, discountPrice: 1.20 }, // Crocante
    { id: 'quantity2', price: 3.00, discountPrice: 1.30 }, // Ferreiro Rcoher
    { id: 'quantity3', price: 2.50, discountPrice: 1.10 }, // Beijinho
    { id: 'quantity4', price: 2.50, discountPrice: 1.10 }, // Tradicional
    { id: 'quantity5', price: 2.50, discountPrice: 1.20 }, // Ninho
    { id: 'quantity6', price: 2.50, discountPrice: 1.20 }, // Casadinho
    { id: 'quantity7', price: 3.00, discountPrice: 1.50 }, //M&M
    { id: 'quantity8', price: 2.50, discountPrice: 1.20 }, //Cajuzinho
    { id: 'quantity9', price: 2.50, discountPrice: 1.30 }, //Ninho com Uva
    { id: 'quantity10', price: 2.50, discountPrice: 1.20 }, //Prestigio
    { id: 'quantity11', price: 2.50, discountPrice: 1.20 }, // Paçoca
    { id: 'quantity12', price: 10, discountPrice: 10 }, // Pipoca chocolate preto
    { id: 'quantity13', price: 10, discountPrice: 10 }, // Pipoca chocolate branco
    { id: 'quantity14', price: 5, discountPrice: 4 } // Alfajor
    // Adicione mais itens conforme necessário
  ];

  itemQuantities.forEach(function(item) {
    var quantity = parseInt(document.getElementById(item.id).value);
    totalQuantity += (isNaN(quantity) ? 0 : quantity); // Soma a quantidade total de itens
  });

  // Verifica se o total de itens é 100 ou mais
  if (totalQuantity >= 100) {
    itemQuantities.forEach(function(item) {
      var quantity = parseInt(document.getElementById(item.id).value);
      total += item.discountPrice * (isNaN(quantity) ? 0 : quantity); // Aplica o preço com desconto
    });
  } else {
    itemQuantities.forEach(function(item) {
      var quantity = parseInt(document.getElementById(item.id).value);
      total += item.price * (isNaN(quantity) ? 0 : quantity); // Preço normal
    });
  }

  document.getElementById('total-price').textContent = total.toFixed(2);
}


//FINAL DO BOTÃO DE CONTROLE DE QUANTIDADE


//SISTEMA PARA MANDAR PARA O WHATSAPP
function sendwhatsapp() {
  var numTelefone = "+5511951526585"; // Número de telefone no formato internacional
  var nome = document.getElementById('name').value;
  var CordaForma = document.getElementById('CordaForma').value;
  var data = document.getElementById('data').value;

  // Obter os itens selecionados com quantidades
  var items = [];
  var itemQuantities = [
    {id: 'quantity1', label: 'Crocante'},
    {id: 'quantity2', label: 'Ferreiro Rocher'},
    {id: 'quantity3', label: 'Beijinho'},
    {id: 'quantity4', label: 'Tradicional'},
    {id: 'quantity5', label: 'Ninho'},
    {id: 'quantity6', label: 'Casadinho'},
    {id: 'quantity7', label: 'M&M'},
    {id: 'quantity8', label: 'Cajuzinho'},
    {id: 'quantity9', label: 'Ninho com Uva'},
    {id: 'quantity10', label: 'Prestigio'},
    {id: 'quantity11', label: 'Paçoca'},
    {id: 'quantity12', label: 'Pipoca Gourmet (Chocolate Preto)'},
    {id: 'quantity13', label: 'Pipoca Gourmet (Chocolate Branco)'}
    // Adicione mais itens conforme necessário
  ];

  itemQuantities.forEach(function(item) {
    var quantity = document.getElementById(item.id).value;
    if (quantity > 0) {
      items.push(item.label + ": " + quantity + "x");
    }
  });

  var itemsText = items.length > 0 ? items.join(", ") : "Nenhum item selecionado";

  // Formatar data no formato dia/mês/ano
  var dataFormatada = "";
  if (data) {
    var partesData = data.split("-");
    dataFormatada = partesData[2] + "/" + partesData[1] + "/" + partesData[0];
  }

  var total = document.getElementById('total-price').textContent;

  var url = "https://wa.me/" + numTelefone + "?text="
    + "*Novo Orçamento!!* " + "%0a"
    + "Nome: " + encodeURIComponent(nome) + "%0a"
    + "Itens selecionados: " + encodeURIComponent(itemsText) + "%0a"
    + "Cor da forma: " + encodeURIComponent(CordaForma) + "%0a"
    + "Data da entrega: " + encodeURIComponent(dataFormatada) + "%0a"
    + "Total: R$ " + encodeURIComponent(total) + "%0a";

  window.open(url, '_blank');
}
//FINAL DO SISTEMA PARA MANDAR PARA O WHATSAPP