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

import solicitarDato from "../../validarDatos.js"

let frase=solicitarDato("Frase: ","string")
while (!frase.length){
    alert("Tienes que introducir una frase")
    frase=solicitarDato("Frase: ","string")
}

const palabras=frase.split(" ").filter(el=>el!='')
console.log(`La primera palabra de la frase es: ${palabras[0]}`)
console.log(`La última palabra de la frase es: ${palabras[palabras.length-1]}`)
const palabrasOrdenadas=palabras.map(el=>el.toLocaleLowerCase()).sort()
console.log(`Las palabras ordenadas de la a a la z: ${palabrasOrdenadas}`)
console.log(`Las palabras ordenadas de la z a la a: ${palabrasOrdenadas.reverse()}`)

