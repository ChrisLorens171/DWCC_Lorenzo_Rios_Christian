/***************************************************************************************************************
 *
 *   Objetivo: Conocer nuevos métodos del objeto Math
 *             Aprender la diferencia entre funciones definidas y expresadas
 *             Mejorar en el uso de lógica de programación para la resolución de problemas
 *             Mejorar en la comunicación con el usuario
 *
 *   Tarea: Adivina un número. 
 *          Solicitaro números enteros entre 1 y 100 mientras el usuario no acierte un número, que se escogerá
 *          inicialmente de forma aleatoria.
 *          Al finalizar el juego se mostrará el número de intentos, pero sin tener en cuenta aquellos intentos 
 *          en los que se introduce un dato incorrecto (que no esté sea un número entero entre 1 y 100).
 *
 *   Entrada : un número entero, n (en cada intento)
 *
 *   Salida  : ! Has acertado ! Has necesitado XX intentos
 *             ! Has fallado ! El número que tienes que adivinar es (mayor|menor)
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

//const ALEATORIO = (min,max) = min + (max - min) * Math.random

let n = 0
let numeroA = Math.floor(Math.random() * (100)) + 1
let contador = 1
let mensaje = ""

while (numeroA != n) {
    mensaje=`Has acertado! Has necesitado ${contador} intentos`

    n = solicitarDato("Introduce un numero entre 1 y 100: ", "integer")
    
    if (n >= 1 && n <= 100) {
        contador++
    }
    
    if (n < numeroA) {
        mensaje = "Es mayor"
        
    } else if (n > numeroA) {
        mensaje = "Es menor"
    }
    alert(mensaje)
}