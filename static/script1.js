/**
 * Altera de forma responsiva o tamanho da fonte dos seletores de texto da página.
 * @param {number} delta - Quantidade de pixels a somar ou subtrair.
 */
function alterarFonte(delta) {
    const elementos = document.querySelectorAll('body, p, h1, h2, h3, label, input, select, button, #grau-lente-dinamico');
    elementos.forEach(elemento => {
        const estiloAtual = window.getComputedStyle(elemento).fontSize;
        const tamanhoAtual = parseFloat(estiloAtual);
        elemento.style.fontSize = (tamanhoAtual + delta) + 'px';
    });
}

/**
 * Ativa ou desativa a classe global de Alto Contraste no elemento Body.
 */
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}
