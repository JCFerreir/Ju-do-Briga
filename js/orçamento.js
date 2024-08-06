function decrementQuantity(inputId) {
    var input = document.getElementById(inputId);
    var value = parseInt(input.value);
    if (value > 0) {
      input.value = value - 1;
    }
  }
  
  function incrementQuantity(inputId) {
    var input = document.getElementById(inputId);
    var value = parseInt(input.value);
    input.value = value + 1;
  }
  
  function sendwhatsapp() {
    var numTelefone = "+5511951526585"; // Número de telefone no formato internacional
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
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
  
    var url = "https://wa.me/" + numTelefone + "?text="
      + "*Nome:* " + encodeURIComponent(nome) + "%0a"
      + "*Email:* " + encodeURIComponent(email) + "%0a"
      + "*Itens selecionados:* " + encodeURIComponent(itemsText) + "%0a";
  
    window.open(url, '_blank');
  }
  