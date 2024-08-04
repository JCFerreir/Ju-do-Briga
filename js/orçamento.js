function sendwhatsapp() {
    var numTelefone = "+5511951526585"; // Corrigido para o formato internacional correto (+55 para Brasil)

    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var url = "https://wa.me/" + numTelefone + "?text=" 
        + "*Nome:* " + encodeURIComponent(nome) + "%0a" 
        + "*Email:* " + encodeURIComponent(email) + "%0a" 
        + "Texto de exemplo para formulário do HTML";
    
    window.open(url, '_blank');
}