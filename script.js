function clicarBotao(valor) {
    let display = document.getElementById('display-content');
    if (valor === 'C') {
        display.textContent = '';
    } else if (valor === '=') {
        try {
            display.textContent = eval(display.textContent);
        } catch (e) {
            display.textContent = 'Erro';
        }
    } else {
        display.textContent += valor;
    }
}