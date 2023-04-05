function calcular() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let total = document.getElementById("total");

    total = numero % 2;

    if (total == 0) {
        resultado.value = ("Par")
        resultado.innerHTML = resultado.value;
    } else {
        resultado.value = ("Impar")
        resultado.innerHTML = resultado.value;
    }
}