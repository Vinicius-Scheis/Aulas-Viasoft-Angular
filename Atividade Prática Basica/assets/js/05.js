function contadorOcorrencia(list, element) {    
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            count++;
        }
    }
    return count;
}

const lista = [1, 2, 3, 4, 2, 3, 2];
const element = 4;
const numOcorrencias = contadorOcorrencia(lista, element);
console.log(`O elemento ${element} ocorre ${numOcorrencias} vezes na lista.`);