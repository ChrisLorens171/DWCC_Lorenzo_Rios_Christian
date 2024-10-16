/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de diferentes formas de resolución de problemas y sus ventajas/desventajas
 *             Reforzar en la lógica de programación
 *             Reforzar en el aprendizaje de programación funcional y métodos del objeto Array
 *             Reforzar en el aprendizaje de métodos del objeto String
 *             Mejorar en el planteamiento sobre casos de entrada
 * 
 *   Tarea: Determinar en un texto el número de palabras, la primera palabra y la última
 *
 *   Entrada : una cadena de caracteres
 *
 *   Salida  : Se muestra la cadena de caracteres introducida por el usuario y
 * 
 *             Número de palabras: XXX
 *             Primera palabra: YYYYY
 *             Última palabra: ZZZZZ
 *             Palabras ordenadas de la a a la z: AAA BBBB CCCC DDDD
 *             Palabras ordenadas de la z a la a: ZZZ YYYY WWWW
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let str = solicitarDato('Introduce una frase: ', 'string')

let arr = str.split(' ')

//Mostrar ultimo elemento del array
let primerElemento = `La primera palabra es: ${arr[0]}`

//Mostrar primer elemento del array
let ultimoElemento = `La ultima palabra es: ${arr[arr.length - 1]}`

//Mostrar el numero de palabras
let numeroPalabras = (`Número de palabras: ${arr.length}`)

//Ordenamos el array en orden alfabetico
let arrAlfabetico = `Palabras ordenadas de la a a la z: ${arr.sort()}`

//Le damos la vuelta al array
let arrReverso = `Palabras ordenadas de la z a la a: ${arr.reverse()}`

console.log(numeroPalabras)
console.log(primerElemento)
console.log(ultimoElemento)
console.log(arrAlfabetico)
console.log(arrReverso)

