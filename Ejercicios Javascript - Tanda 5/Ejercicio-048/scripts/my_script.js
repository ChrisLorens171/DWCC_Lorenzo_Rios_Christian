/***************************************************************************************************************
 *
 *   Objetivo: Refuerzo en la programación según las especificaciones del programa a resolver
 *             Aprender a plantearse la solución de formas menos convencionales
 *             Aprender a emplear programación funcional
 *             Aprender las diferencias entre objetos String y Array
 *             Aprender a definir objetos
 *
 *   Tarea: Solicitar al usuario una cadena de texto. 
 *          Crear y mostrar un objeto con la frecuencia del número de vocales
 *
 *   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
 *
 *   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let cadena = solicitarDato("Introduce una cadena: ", "string");

function contarVocales () {

    // Defines un objeto con las vocales en 0
    const frecuenciaVocales = {"a": 0,"e": 0,"i": 0,"o": 0,"u": 0}
    const keys = Object.keys(frecuenciaVocales)

    return [...cadena.toLowerCase()].reduce((contador, letra) => {
        if (keys.includes(letra)) {
            contador[letra] += 1;0
        }
        return contador;
    }, frecuenciaVocales)
}

console.log(contarVocales(cadena));
