/* const { link } = require('fs');
const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js'); */
// No quiero que use los recursos de DS porque abajo creo la función de Queue

// Recursión:
// Escribir una función que a partir de un arreglo que en cada posición puede tener un único elemento o
// ser otro arreglo vaya imprimiendo todos esos elementos de a uno
var array = [1,2,[3,4],5,[6,[7,8]]]; // --> 1,2,3,4,5,6,7,8
function recursiveArrayPrint(array){
  // Tu código aca:
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      recursiveArrayPrint(array[i])
    } else {
      console.log(array[i]);
    }
  }

}

recursiveArrayPrint(array)

// ------------------------------------
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function(data) {
  this.array.push(data);
}

// Crear dos queues agregando en cada caso los valores de los siguientes arreglos:
var arrayOne = [1,3,5,7];
var arrayTwo = [2,4,6,8];

// Tu código aca:

let queueOne = new Queue();
let queueTwo = new Queue();
arrayOne.forEach(x => queueOne.enqueue(x))
arrayTwo.forEach(x => queueTwo.enqueue(x))

console.log(queueOne)
console.log(queueTwo)


// ------------------------------------

// Dadas las dos queues recién creadas que tienen el mismo tamaño, devolver un arreglo el cual vayamos agregando
// de forma alternada elementos de cada queue
// 1,2,3,4,5,6,7,8
function mixQueue(queueOne, queueTwo){
  // Tu código aca:
  const result = [];
  for (let i = 0; i < queueOne.length; i++) {
    result.push(queueOne[i]);
    result.push(queueTwo[i]);
  }
  return result;
}

console.log(mixQueue(queueOne.array,queueTwo.array))

// ------------------------------------

// Implementar la función closureSum que recibe un parámetro (numFijo) y que debe retornar otra función
// que también debe recibir un parámetro y debe devolver la suma de este últimom parámetro con numFijo.
// Ejemplo 1:
//    var sumaCinco = closureSum(5);
//    sumaCinco(2);  --> Devolverá 7 (Ya que 2 + 5 = 7)
//    sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)
// Ejemplo 2:
//    var sumaDiez = closureSum(10);
//    sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
//    sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)

function closureSum(numFijo) {
  return function(numVariable) {return numFijo+numVariable};
}

var sumaCinco = closureSum(5);
console.log(sumaCinco(11))

