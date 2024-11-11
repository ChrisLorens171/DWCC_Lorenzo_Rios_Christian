/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de programación repetitivas
 *             
 *   Tarea: Se solicita un número entero n entre 1 y 20 al usuario. 
 *          Se mostrará una pirámide de la siguiente forma:
 *
 *               1
 *               2 2
 *               3 3 3
 *               4 4 4 4
 *                 ...
 *               n n n n n n n (n veces)
 *
 *          Realizar en ejercicio con for, while, do while
 * 
 *   Entrada : numero entero: n
 *
 *   Salida  : La pirámide mostrada en la tarea del ejercicio
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let n = solicitarDato("Introduce un numero: ", "integer")
let repes = null
let mensaje = ""

if (n > 0 && n <= 20) {

    for (let i = 1; i <= n; i++) {

        repes = i

        while (repes > 0) {

            repes = repes - 1
            mensaje = mensaje.concat(`${i} `)

        }

        mensaje = mensaje.concat(`\n`)
    }

} else {

    console.log("Entre 1 y 20")
}

console.log(mensaje)

