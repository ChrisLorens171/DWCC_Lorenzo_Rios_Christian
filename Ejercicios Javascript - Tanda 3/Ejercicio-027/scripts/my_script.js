/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en la lógica de programación
 *
 *   Tarea: Obtener la secuencia más larga de ceros indicando la posición de inicio. En caso de que existan varias,
 *          se indicará la primera.
 *
 *   Entrada : "011000010110000"
 *
 *   Salida  : Secuencia: "0000"   Posicion: 3
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let cadena = solicitarDato('Introduce una secuencia de 0 y 1: ','string')
let longitudMax = 0
let longitud = 0
let secuencia = ''
let posicionMax = 0

function buscarSecuencia(cadena,posicion){
    let i = posicion
    /* Mientras el elemento sea igual al siguiente seguimos contando, cuando sea diferente salimos del while */
    while (i + 1 < cadena.length && cadena[i] == cadena[i + 1])
        i++
    return i - posicion + 1
}

for (let i = 0; i < cadena.length; i += longitud) {
    longitud = buscarSecuencia(cadena, i)
    if (longitud > longitudMax) {
        longitudMax = longitud
        posicionMax = i
        secuencia = cadena[i]
    }
}

cadena = cadena.substring(posicionMax, posicionMax + longitudMax)
console.log(`Secuencia ${cadena} 'Posición: ${posicionMax}`) 



