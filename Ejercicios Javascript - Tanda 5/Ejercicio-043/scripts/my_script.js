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

import solicitarDato from "../../validarDatos.js"

const MIN=-100
const MAX=100

// Funcion que devuelve un número aleatorio enterio entre [min,max)
// Incluye min, pero no max
const aleatorio=(min,max)=>parseInt(min+(max-min)*Math.random())

// Calculamos la matriz traspuesta empleando programación clásica
function traspuesta1(matriz){
    const resultado=[]

    for(let i=0;i<matriz.length;i++){
        resultado[i]=[]
        for (let j=0;j<matriz[i].length;j++)
            resultado[i][j]=matriz[j][i]
    }
    return resultado
}

let nFilas=solicitarDato("Número de filas (>0): ", "integer")
while (nFilas<=0) {
    nFilas=solicitarDato("Número de filas (>0):", "integer")
}

let nCols=solicitarDato("Número de columnas (>0): ", "integer")
while (nCols<=0) {
    nCols=solicitarDato("Número de columnas (>0): ", "integer")
}

// Creamos la matriz con las dimensiones indicadas
const matriz=Array.from({length:nFilas},el=>Array.from({length:nCols},el=>aleatorio(MIN,MAX+1)))

// Calculamos la traspuesta de la anterior directamente
const traspuesta2=Array.from({length:nFilas},(el,i)=>Array.from({length:nCols},(el,j)=>matriz[j][i]))

console.log(matriz,traspuesta1(matriz))
console.log(matriz,traspuesta2)
