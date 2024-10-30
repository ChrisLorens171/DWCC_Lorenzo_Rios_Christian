/***************************************************************************************************************
 *
 *   Tarea: Practicar el uso de programación funcional mediante el uso del método reduce
 *
 *   Objetivo: Solicitar un número entero n
 *             Imprimir en la consola la suma de los números enteros entre 1 y n, donde n es un dato solicitado al usuario. 
 *             Comprobar si esa suma coincide con n*(n+1)/2
 *             Imprimir en la consola la suma de cada término de la serie ((-1)^p+1)/(2*p-1), donde p va desde 1 a n
 *
 *   Entrada : número entero: n
 *
 *   Salida  : La suma de 1+2+3+...n es XXXX
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"
let n = solicitarDato("Introduce un numero entero: ", "integer")

let serie1 = 0
let respuesta1 = ""
let respuesta2 = ""

// Imprimir en la consola la suma de los números enteros entre 1 y n, donde n es un dato solicitado al usuario. 
for (let i = 1; i <= n; i++) {
    serie1 += i
}

respuesta1 = `Suma de los enteros: ${serie1}`
console.log(respuesta1)

// Comprobar si esa suma coincide con n*(n+1)/2
serie1 == n * (n+1) / 2 ? respuesta2 = "Son iguales" : respuesta2 = "No son iguales"
console.log(respuesta2)

//Imprimir en la consola la suma de cada término de la serie ((-1)^p+1)/(2*p-1), donde p va desde 1 a n
let serie2 = Array.from({length:n},(el,i)=>Math.pow((-1),i+1)/(2*i-1)).reduce((anterior,actual)=>anterior+actual,0)
console.log(serie2)

