/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en el aprendizaje de arrays multidimensionales
 *             Mejorar en la programación funcional
 *
 *   Tarea: Generar dos arrays bidimensionales con números aleatorios entre -100 y 100 (ambos incluídos)
 *          Realizar el producto de dos arrays bidimensionales anteriores
 *
 *   Entrada : número entero: número de filas
 *             número entero: número de columnas
 *  
  *   Salida  : El array bidimensional que es el producto de los generados
 *
 *   Nota    : Cada elemento R(i,j) de la matriz producto vendrá dado por:
 *
 *                    R(i,j)= Suma(A(i,k)* B(k,j))
 *
 *             donde (i,j) representa (fila,columna)
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let filas = solicitarDato("Introduce un número entero para las filas: ", "integer");
let columnas = solicitarDato("Introduce un número entero para las columnas: ", "integer");

const MIN=-100
const MAX=100

const aleatorio=(min,max)=>parseInt(min+(max-min)*Math.random())

function generarMatriz(filas, columnas) {
    return Array.from({ length: filas }, () =>
        Array.from({ length: columnas }, () => aleatorio(MIN,MAX))
    );
}

let matrizAleatoria = generarMatriz(filas, columnas)
let matrizAleatoria2 = generarMatriz(filas, columnas)

function productoMatrices(a, b) {
    let filasA = a.length
    let columnasA = a[0].length
    let columnasB = b[0].length

    // Verificamos que las matrices son compatibles
    if (filasA !== columnasB) {
        resultado = "No se puede hacer la operacion"
        return 
    }

    let resultado = Array.from({ length: filasA }, () => Array(columnasB).fill(0))

    for (let i = 0; i < filasA; i++) {
        for (let j = 0; j < columnasB; j++) {
            for (let k = 0; k < columnasA; k++) {
                resultado[i][j] += a[i][k] * b[k][j]
            }
        }
    }

    return resultado;
}

console.log(matrizAleatoria)
console.log(matrizAleatoria2)

console.log(productoMatrices(matrizAleatoria,matrizAleatoria2))



