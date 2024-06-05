/*
I. Declara el siguiente arreglo:

i. numeros= [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]

II. Crea una función asíncrona que recorra el arreglo numeros y genere uno nuevo
llamado pares que contenga solo los pares de arreglo numeros
III. Imprimir los 2 arreglos como resultado
*/

const numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];

async function generarPares(arr) {
    return new Promise((resolve) => {
      const pares = arr.filter(num => num % 2 === 0);
      resolve(pares);
      
    });
  }
async function main() {
const pares = await generarPares(numeros);
console.log("Arreglo:", numeros);
console.log("Pares:", pares);
}
main();

