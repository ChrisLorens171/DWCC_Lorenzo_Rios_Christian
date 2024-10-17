/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Practicar la programación iterativa y recursiva
 *             Valorar diferentes métodos de resolución de problemas, sus ventajas e inconvenientes
 * 
 *   Tarea: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
 *          P.ej: Dabale arroz a la zorra el abad
 *
 *   Entrada : Cadena de texto
 *
 *   Salida  : La cadena .... (es|no es) un palíndromo
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let cadena = solicitarDato("Introduce una cadena", "string")

function limpiarCadenas(cadenaF) { 
    cadenaF = cadenaF.replace(/[áéíóúÁÉÍÓÚñÑ]/g, 'aieouAIEOUnN').toUpperCase().trim().split('')

    return cadenaF
}

console.log(compararCadenasPalindromas(cadena, cadenaReversa))