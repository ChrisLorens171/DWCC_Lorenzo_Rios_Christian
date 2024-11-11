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

import solicitarDato from "../../validarDatos.js"

const MIN=-100
const MAX=100

// Funcion que devuelve un número aleatorio enterio entre [min,max)
// Incluye min, pero no max
const aleatorio=(min,max)=>parseInt(min+(max-min)*Math.random())

// Calculamos la suma de las diagonales con programación clásica
function sumaDiagonales1(matriz){
    let sum=0
    for(let i=0;i<matriz.length;i++){
        sum+=matriz[i][i]+matriz[i][matriz.length-1-i]
    }
    return sum
}

let nFilas=solicitarDato("Número de filas (>0): ", "integer")
while (nFilas<=0){
    nFilas=solicitarDato("Número de filas (>0): ", "integer")
}

let nCols=solicitarDato("Número de columnas (>0): ", "integer")
while (nFilas!=nCols){
    alert("La matriz debe ser cuadrada. El número de filas debe coincidir con el número de columnas")
    nCols=solicitarDato("Número de columnas: ", "integer")
}

// Creamos la matriz con las dimensiones indicadas
const matriz=Array.from({length:nFilas},el=>Array.from({length:nCols},el=>aleatorio(MIN,MAX+1)))

// Calculamos la suma de las diagonales empleando el metodo reduce
let sumaDiagonales2=matriz.reduce((anterior,actual,i)=>anterior+actual[i]+actual[actual.length-1-i],0)

console.log(matriz,sumaDiagonales1(matriz))
console.log(matriz,sumaDiagonales2)
