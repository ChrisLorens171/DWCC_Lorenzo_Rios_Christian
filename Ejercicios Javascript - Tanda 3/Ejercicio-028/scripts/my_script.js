/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Practicar la programación iterativa y recursiva
 *             Valorar diferentes métodos de resolución de problemas, sus ventajas e inconvenientes
 *             Aprender a emplear funciones definidas por el usuario
 *
 *   Tarea: Mostrar la serie de Fibonacci hasta el número indicado por el usuario
 *          Cada elemento de la serie de Fibonacci se calcula sumando los dos anteriores. 
 *          Los dos primeros elementos de la serie son 0 y 1
 * 
 *          Realizar dos versiones: la versión iterativa y la recursiva
 *
 *   Entrada : n
 *
 *   Salida  : 0,1,2,3,5,8,13,....
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";
let n = solicitarDato("Introduce un numero", "integer")

function fibIterativo(n) {
    let a = 0
    let b = 1
    let numFib = 0
    let respuesta = [0]
  
    while (numFib < n) {
        let actual = b + a
        if (actual < n) {
            respuesta.push(actual)
        }
        a = b
        b = actual
        numFib = actual
    }

    return respuesta
}

console.log(fibIterativo(n))

