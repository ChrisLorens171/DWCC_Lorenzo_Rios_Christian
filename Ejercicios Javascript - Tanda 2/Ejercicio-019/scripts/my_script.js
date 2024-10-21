/***************************************************************************************************************
 *
 *   Objetivo: Reforzar programación funcional
 *             Reforzar en la lógica de programación
 *             Mejorar la forma de programar
 *             Aprender a abordar el problema de diferentes formas
 *
 *   Tarea: Solicitar un número entero n
 *          Generar los números perfectos menores que n
 *
 *          Nota: Un número es perfecto cuando el número es igual a la suma de sus divisores.
 *
 *   Entrada : número entero: n
 *
 *   Salida  :
 *
 ***************************************************************************************************************/

let num = parseInt(prompt("Introduce un número: "))
let sum = 0;

function esPerfecto(num) {

    sum = 0

    for (let i = 1; i < num; i++) {

      if (num % i === 0) {

        sum += i

      }
    }

    return sum === num
}

for (let i = 1; i < n; i++) {

    if (esPerfecto(i) === true) {

        console.log(i)

    }
}