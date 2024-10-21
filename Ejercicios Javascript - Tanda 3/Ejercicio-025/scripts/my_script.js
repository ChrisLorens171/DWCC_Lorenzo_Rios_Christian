/***************************************************************************************************************
 *
 *   Objetivo: Reformar en lógica de programación
 *             Aprender nuevos métodos de String/Array
 *             Aprender a programar pensando en datos de entrada
 *             Reforzar en la programación funcional
 *             Reforzar en el uso de métodos de array
 *
 *   Tarea: Solicita un texto y una palabra.
 *
 *   Entrada : cadena de texto: texto
 *             cadena de texto: palabra
 *
 *   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let cadena = solicitarDato('Introduce una frase: ', 'string').toUpperCase()
let palabra = solicitarDato('Introduce una palabra ', 'string').toUpperCase()

function encontrarPosiciones(cadena, palabra) {
    
    const posiciones = []
    let index = cadena.indexOf(palabra)

    while (index != -1) {
        posiciones.push(index)
        index = cadena.indexOf(palabra, index + 1);
    }

    return posiciones
}

console.log(`La palabra ${palabra} está en las posiciones: ${encontrarPosiciones(cadena, palabra)}`)
