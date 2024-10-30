/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en el aprendizaje de arrays multidimensionales
 *             Mejorar en la programación funcional
 *
 *   Tarea: Generar una matriz con números aleatorios entre -100 y 100 (ambos incluídos)
 *          Generar la matriz traspuesta: T(i,j)=A(j,i)
 * 
 *    Entrada : número entero: número de filas
 *              número entero: número de columnas
 * 
 *    Salida  : La matriz generada y la traspuesta
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"
let filas = solicitarDato("Introduce un numero entero para las filas: ", "integer")
let columnas = solicitarDato("Introduce un numero entero para las columnas: ", "integer")


function generarMatriz(filas, columnas) {
    return Array.from({ length: filas }, () =>
        Array.from({ length: columnas }, () => Math.floor(Math.random() * 201) - 100)
);
}

let matrizAleatoria = generarMatriz(filas,columnas)
let matrizTransversa = generarMatriz(columnas,filas)

for (let i = 0; i < matrizTransversa.length; i++) {
    for (let j = 0; j < matrizAleatoria.length; j++) {
        matrizTransversa[i][j] = matrizAleatoria[j][i]
        
    }
}

console.log(matrizAleatoria)
console.log(matrizTransversa)
