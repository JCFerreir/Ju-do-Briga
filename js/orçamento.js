function sendwhatsapp() {
    var numTelefone = "+5511951526585"; // Número de telefone no formato internacional
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Obter os itens selecionados
    var items = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
        items.push(checkbox.value);
    });
    
    var itemsText = items.length > 0 ? items.join(", ") : "Nenhum item selecionado";

    var url = "https://wa.me/" + numTelefone + "?text="
        + "*Nome:* " + encodeURIComponent(nome) + "%0a"
        + "*Email:* " + encodeURIComponent(email) + "%0a"
        + "*Itens selecionados:* " + encodeURIComponent(itemsText) + "%0a";

    window.open(url, '_blank');
}
