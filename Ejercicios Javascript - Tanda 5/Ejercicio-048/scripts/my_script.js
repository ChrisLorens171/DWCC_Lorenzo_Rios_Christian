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

// Solicita la cadena al usuario
let cadena = solicitarDato("Introduce una cadena: ", "string");

// Función para contar vocales
function contarVocales(cadena) {
    // Definimos un objeto con las vocales inicializadas a 0
    const frecuenciaVocales = { "a": 0, "e": 0, "i": 0, "o": 0, "u": 0 }
    const keys = Object.keys(frecuenciaVocales) // Obtenemos las vocales como array

    // Usamos reduce para iterar sobre cada letra de la cadena en minúsculas
    return [...cadena.toLowerCase()].reduce((contador, letra) => {
        if (keys.includes(letra)) {
            contador[letra] += 1 // Incrementamos el contador de la vocal encontrada
        }
        return contador // Devolvemos el objeto actualizado
    }, frecuenciaVocales)
}

// Imprime el resultado
console.log(contarVocales(cadena))

