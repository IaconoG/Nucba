// **  E1: Condicionales, Ciclos y Funciones

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function parImpar(numero) {
  let message = numero % 2 === 0 ? "El número es par" : "El número es impar";
  console.log(message);
}
console.log(" -- Ejercicio 1 -- ");
parImpar(2);
parImpar(3);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function mayor(num1, num2) {
  let numMayor = num1 > num2 ? num1 : num2;
  console.log("El numero mayor es: ", numMayor);
}
console.log(" -- Ejercicio 2 -- ");
mayor(2, 3);
mayor(3, 2);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function esMultiploDeCinco(num) {
  let esMultiploDeCinco = num % 5 === 0;
  console.log("El numero es multiplo de 5: ", esMultiploDeCinco);
}
console.log(" -- Ejercicio 3 -- ");
esMultiploDeCinco(5);
esMultiploDeCinco(12);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function imprimirHasta(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}
console.log(" -- Ejercicio 4 -- ");
imprimirHasta(6);
imprimirHasta(3);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function imprimirPalabra(palabra, num) {
  for (let i = 0; i < num; i++) {
    console.log(palabra);
  }
}
console.log(" -- Ejercicio 5 -- ");
imprimirPalabra("hola", 3);
imprimirPalabra("chau", 2);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function imprimirArray(arr) {
  for (const elem of arr) {
    console.log(elem);
  }
}
console.log(" -- Ejercicio 6 -- ");
imprimirArray([1, 2, 3, 4, 5]);
imprimirArray(["hola", "chau", "hola", "chau"]);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function imprimirArraySinPosicion5(arr) {
  let posicionAOmitir = 5;
  let cantidadDeNumeros = 10;
  for (let i = 0; i < cantidadDeNumeros; i++) {
    if (i !== posicionAOmitir) {
      console.log(arr[i]);
    }
  }
}
console.log(" -- Ejercicio 7 -- ");
imprimirArraySinPosicion5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // El numero 6 esta en la 5ta posicion

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro
function imprimirArrayMultiplicado(arr, num) {
  for (const elem of arr) {
    console.log(elem * num);
  }
}
console.log(" -- Ejercicio 8 -- ");
imprimirArrayMultiplicado([1, 2, 3, 4, 5], 2);
