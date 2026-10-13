//RESUELVE LOS EJERCICIOS AQUÍ

// 1.- Dado el objeto empleados, extrae la empleada Ana completa.

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;
console.log(ana);

// 2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com

const [{ email: emailLuis }, ,] = empleados;

console.log(emailLuis);

// 3.- Usa destructuración para cambiar los valores de a y b;
// Inicialmente
let a = 5;
let b = 3;

// Al final
//let a = 3;
//let b = 5;

((a = 3), (b = 5));
console.log(a, b);

//4.- Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
//Cambiar las siguientes líneas para guardar mediante destructuración
//  los valores de temperaturas en las variables maximaHoy y maximaManana

/*const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);*/

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy, maximaManana);

// 5.- Escribe una función llamada sumEveryOther que pueda recibir
//  cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
function sumEveryOther(...arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26

// 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número
// de argumentos (incluyendo números y strings y retorne la suma solo de los
// números).
function addOnlyNums(...arr) {
  let total2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      total2 += arr[i];
    }
  }
  return total2;
}
console.log(addOnlyNums(1, "perro", 2, 4)); //7
console.log(addOnlyNums(1, "perro", 6, "gato", "ratón", 7)); //14
console.log(
  addOnlyNums(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina"),
); // 14

// 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier
// número de argumentos y devuelva un número que indique cuántos argumentos
// ha recibido.
function countTheArgs(...arr) {
  return arr.length;
}
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

// 8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo
// argumentos y devuelva solo un array que combine los dos (usando spread operator)
function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(combineTwoArrays([1, 2, 3], [4, 5, 6])); //devuelve [1, 2, 3, 4, 5, 6]
console.log(combineTwoArrays([1, 2], [3, 4, 5, 6])); //devuelve [1, 2, 3, 4, 5, 6]
console.log(combineTwoArrays([1], [2, 3, 4, 5, 6])); //devuelve [1, 2, 3, 4, 5, 6]

// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de
// argumentos y devuelva un array de elementos únicos, sin repetidos.

function onlyUniques(...arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    let palabra = arr[i];
    if (!resultado.includes(palabra)) {
      resultado.push(palabra);
    }
  }
  return resultado;
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier
//  cantidad de arrays como argumentos y los combine todos en un solo array.
function combineAllArrays(...arr) {
  let todo = [];
  for (let array of arr) {
    for (let i = 0; i < array.length; i++) {
      todo.push(array[i]);
    }
  }

  return todo;
}
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]),
); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]);

// 11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos,
// los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare(...arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
