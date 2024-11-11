/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de control repetitivas.
 *             Reforzar en el uso de funciones definidas por el usuario.
 *             Aprender diferentes formas de crear arrays (adicional)
 *             Entender las funciones anónimas y funciones flecha o arrow functions (adicional)
 *             Aprender a emplear métodos del objeto Array para programación funcional (adicional)
 *
 *   Tarea: Solicitamos un número entero n al usuario 
 *          Mostramos en la consola los numeros pares desde 2 hasta ese numero
 * 
 *          Realizar 4 versiones: con for, while, do..while, con arrays y el método join
 *
 *   Entrada : numero entero n, n>=2
 *
 *   Salida  : 2, 4, 6, ..., n  (incluidas las coma y el espacio detras de cada número excepto el último)
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let n = solicitarDato("Introduce un numero:", "integer")
let mensajeFor = ''

for (let i = 2; i <= n; i += 2) {

    mensajeFor += `${i} `

}

console.log(mensajeFor)

/* Con while */

let mensajeWhile = ''
let contador = 2

while (contador <= n) {

    mensajeWhile += `${contador} `

    contador += 2
}

console.log(mensajeWhile)


/* Con do while */

let mensajeDoWhile = ''
let contadorDoWhile = 2

    do {

        mensajeDoWhile += `${contadorDoWhile} `

        contadorDoWhile += 2

    } while (contadorDoWhile <= n)

console.log(mensajeDoWhile)

/* Arrays y método Join */

let numerosPares = [];

for (let i = 2; i <= n; i += 2) {

    numerosPares.push(i)
    
}

console.log(numerosPares.join(' '))
