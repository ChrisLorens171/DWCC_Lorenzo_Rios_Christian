/***************************************************************************************************************
 *
 *   Objetivo: Aprender a abordar el problema de diferentes formas determinando las ventajas/inconvenientes
 *             Mejorar en la lógica de programación
 *             
 *   Tarea: Solicitamos un número entero n positivo. 
 *          Si n es par, se divide por 2 y su n es impar se multiplica por tres y suma uno. 
 *          El proceso se repite hasta que n tenga el valor de 1.
 * 
 *             Por ejemplo, la secuencia para n=3 será:
 *
 *                  3--> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1
 *
 *   Entrada : numero entero n entre 1 y 100
 *
 *   Salida  : La secuencia de valores obtenida
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

/*
let n = solicitarDato("Introduce un numero entre 1 y 100: ", "integer")
const RESPUESTA = []

while (n != 1) {

    if (n % 2 == 0) {
        n = n / 2
    } else {
        n = (n * 3) + 1
    }

    RESPUESTA.push(n)
}

console.log(RESPUESTA.join(' --> '))
*/

let n = solicitarDato("Introduce un numero entre 1 y 100: ", "integer");
const RESPUESTA = [];

function cadenaNumeros(n) {
    RESPUESTA.push(n);
    
    if (n === 1) {
        return RESPUESTA

    }

    if (n % 2 === 0) {
        cadenaNumeros(n / 2)
    } else {
        cadenaNumeros(n * 3 + 1)
    }
}

cadenaNumeros(n)
console.log(RESPUESTA.join(' --> '))

