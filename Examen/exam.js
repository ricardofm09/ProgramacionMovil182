const numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];

const ulOriginal = document.createElement('ul');
const ulPares = document.createElement('ul');

async function cargarNumeros() {
    const pares = numeros.filter(num => num % 2 === 0);

    numeros.forEach(function (num) {
        const li = document.createElement('li');
        li.innerText = num;
        ulOriginal.append(li);
    });

    pares.forEach(function (num) {
        const li = document.createElement('li');
        li.innerText = num;
        ulPares.append(li);
    });

    document.body.append(ulOriginal);
    document.body.append(ulPares);
}

cargarNumeros();

console.log("Arreglo original cargado");
console.log("Arreglo de números pares cargado");
