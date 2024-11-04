/***************************************************************************************************************
 *
 *   Objetivo:
 *
 *   Tarea: Sumar los elementos de las dos diagonales de una matriz bidimensional.
 *          Se genera una matriz de las dimensiones indicadas con números aleatorios
 *          entre -100 y 100 (ambos incluídos)
 *
 *   Entrada : La dimension de la matriz (número de filas y columnas)
 *
 *   Salida  : La matriz generadas y la suma de las dos diagonales de la misma
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"
let filasColumnas = solicitarDato("Introduce un numero entero para las filas y columnas: ", "integer")
let sumDiagonal = 0
let sumDiagonalInversa = 0

const MIN=-100
const MAX=100

const aleatorio=(min,max)=>parseInt(min+(max-min)*Math.random())

function generarMatriz(filas, columnas) {
    return Array.from({ length: filas }, () =>
        Array.from({ length: columnas }, () => aleatorio(MIN,MAX))
    );
}

let matrizAleatoria = generarMatriz(filasColumnas)

for (let i = 0; i < matrizAleatoria.length; i++) {
    sumDiagonal += matrizAleatoria[i][i]
    sumDiagonalInversa += matrizAleatoria[i][filasColumnas - 1 - i]
}

console.log(matrizAleatoria)
console.log(`La suma de la diagonal es ${sumDiagonal}`)
console.log(`La suma de la diagonal inversa es ${sumDiagonalInversa}`)