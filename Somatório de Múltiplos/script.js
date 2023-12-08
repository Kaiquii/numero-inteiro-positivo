function calcularSomatorio() {
    const numeroInput = document.getElementById('numero');
    const resultadoElement = document.getElementById('resultado');
    const detalhesElement = document.getElementById('detalhes');

    const numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        resultadoElement.textContent = "Por favor, forneça um número inteiro positivo.";
        detalhesElement.textContent = "";
        return;
    }

    const { somatorio, numerosSomados } = somatorioMultiplos3e5(numero);

    resultadoElement.textContent = `O somatório dos múltiplos de 3 ou 5 até ${numero - 1} é: ${somatorio}`;
    detalhesElement.textContent = `Números somados: ${numerosSomados.join(', ')}`;
}

function somatorioMultiplos3e5(numero) {
    let somatorio = 0;
    const numerosSomados = [];

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
            numerosSomados.push(i);
        }
    }

    return { somatorio, numerosSomados };
}