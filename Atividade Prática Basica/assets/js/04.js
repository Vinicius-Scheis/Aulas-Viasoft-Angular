function encontrarMaiorNumero() {
    const lista = document.getElementById("lista");
    const listaNumerica = lista.value.split(",").map(Number);
    const maiorNumero = Math.max(...listaNumerica);
    const resultado = document.getElementById("resultado");
    resultado.textContent = `O maior número é ${maiorNumero}.`;
}