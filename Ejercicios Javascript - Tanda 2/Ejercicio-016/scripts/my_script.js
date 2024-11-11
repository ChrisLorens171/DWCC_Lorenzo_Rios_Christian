/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de métodos del objeto Math
 *             Reforzar el uso de estructuras repetitivas
 *             Reforzar en el uso de template strings
 *             Aprender a definir arrays con el método estático Array.from
 *             Reforzar el aprendizaje en el uso de funciones flecha (arrow funcions)
 *             Aprender a emplear el método map del objeto Array para la programación funcional
 *
 *   Tarea: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
 *
 *   Entrada : inicio, fin
 *
 *   Salida  : inicio², (inicio+1)², ..... (fin)²
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let n = solicitarDato("Introduce un numero:", "integer")
let n2 = solicitarDato("Otro mas: ", "integer")

if (n2 > n) {

    for (let i = n; i <= n2; i++) {

        console.log(`${i} al cuadrado es ${Math.pow(i,2)}`)

    }
}

