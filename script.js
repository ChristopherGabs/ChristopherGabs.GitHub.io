let display = document.getElementById("display");
function adicionarValor(valor) {
    display.value += valor;
}
    function buttonClicked(buttonNumber){
        alert('Voce clicou no botao ' + buttonNumber);
    }
    function adicionarValor(valor) {
    display.value += valor;
}
function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}
