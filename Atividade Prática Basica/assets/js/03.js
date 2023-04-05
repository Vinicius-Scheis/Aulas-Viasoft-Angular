function calcular() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let imprimir = document.querySelector("span");
    var media = (n1 + n2 + n3) / 3;


    imprimir.textContent = ("A média entre os números é de " + media);
}