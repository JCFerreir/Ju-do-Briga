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
  var itemQuantities = [
    { id: 'quantity1', price: 2.50 }, // Preço do Item 1
    { id: 'quantity2', price: 2.50 }, // Preço do Item 2
    { id: 'quantity3', price: 2.50 } // Preço do Item 3
    // Adicione mais itens conforme necessário
  ];

  itemQuantities.forEach(function(item) {
    var quantity = parseInt(document.getElementById(item.id).value);
    total += item.price * (isNaN(quantity) ? 0 : quantity);
  });

  document.getElementById('total-price').textContent = total.toFixed(2);
}

function sendwhatsapp() {
  var numTelefone = "+5511951526585"; // Número de telefone no formato internacional
  var nome = document.getElementById('name').value;
  var CordaForma = document.getElementById('CordaForma').value;
  var data = document.getElementById('data').value;

  // Obter os itens selecionados com quantidades
  var items = [];
  var itemQuantities = [
    {id: 'quantity1', label: 'Item 1'},
    {id: 'quantity2', label: 'Item 2'},
    {id: 'quantity3', label: 'Item 3'}
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
    + "*Nome:* " + encodeURIComponent(nome) + "%0a"
    + "*Itens selecionados:* " + encodeURIComponent(itemsText) + "%0a"
    + "*Cor da forma:* " + encodeURIComponent(CordaForma) + "%0a"
    + "*Data da entrega:* " + encodeURIComponent(dataFormatada) + "%0a"
    + "*Total:* R$ " + encodeURIComponent(total) + "%0a";

  window.open(url, '_blank');
}
