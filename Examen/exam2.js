const estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
    name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

const ulOriginal = document.createElement('ul');
const ulPares = document.createElement('ul');

async function cargarEdades() {
const mayores = estudiantes.filter(estudiante => estudiante.age > 18)
                           .map(estudiante => estudiante.name);

    estudiantes.forEach(function (estudiante) {
        const li = document.createElement('li');
        li.innerText = estudiante;
        ulOriginal.append(li);
    });

    mayores.forEach(function (estudiante) {
        const li = document.createElement('li');
        li.innerText = estudiante.age;
        ulPares.append(li);
    });

    document.body.append(ulOriginal);
    document.body.append(ulPares);
}

cargarEdades();

console.log("Arreglo original cargado");
console.log("Arreglo de números pares cargado");
