/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de control repetitivas.
 *             Reforzar en el uso de funciones definidas por el usuario.
 *             Aprender diferentes formas de crear arrays (adicional)
 *             Entender las funciones anónimas y funciones flecha o arrow functions (adicional)
 *             Aprender a emplear métodos del objeto Array para programación funcional (adicional)
 *
 *   Tarea: Solicitamos un número entero n al usuario 
 *          Mostramos en la consola los numeros pares desde 2 hasta ese numero
 * 
 *          Realizar 4 versiones: con for, while, do..while, con arrays y el método join
 *
 *   Entrada : numero entero n, n>=2
 *
 *   Salida  : 2, 4, 6, ..., n  (incluidas las coma y el espacio detras de cada número excepto el último)
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let n = solicitarDato("Introduce un numero:", "integer")
let mensaje = ""
let nums1 = 2
let nums2 = 2

/* Con for */

for (let i = 2; i <= n; i += 2) {

    mensaje = mensaje.concat(`${i} `)

}

console.log(mensaje)

/* Con while */

while (nums1 <= n) {

    mensaje = mensaje.concat(`${i}`)
    
    nums1 += 2

}

console.log(mensaje)

/* Con do while */

do {

    nums2 += 2

} while (nums2 <= n)