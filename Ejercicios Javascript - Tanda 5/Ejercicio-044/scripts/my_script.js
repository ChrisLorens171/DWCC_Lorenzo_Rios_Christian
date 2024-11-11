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

import solicitarDato from "../../validarDatos.js"

const MIN=-100
const MAX=100

// Funcion que devuelve un número aleatorio enterio entre [min,max)
// Incluye min, pero no max
const aleatorio=(min,max)=>parseInt(min+(max-min)*Math.random())

// Calculamos el producto de dos matrices empleando programación clásica
function producto1(matriz1,matriz2){
    const resultado=[]

    for (let i=0;i<matriz1.length;i++){
        resultado[i]=[]
        for (let j=0;j<matriz2[0].length;j++){
            let sum=0 
            for (let k=0;k<matriz1[i].length;k++){
                sum+=matriz1[i][k]*matriz2[k][j]
            }
            resultado[i][j]=sum
        }
    }
    return resultado
}

// Calculamos el producto con reduce
function producto2(matriz1, matriz2) {
    const resultado=Array.from({length:matriz1.length},fila=>Array.from({length:matriz2[0].length},dato=>0))
    return resultado.map((fila,i)=>fila.map((val,j)=>matriz1[i].reduce((anterior,actual,k)=>anterior+actual*matriz2[k][j],0)))
}

let nFilas=solicitarDato("Número de filas (>0): ", "integer")
while (nFilas<=0) {
    nFilas=solicitarDato("Número de filas (>0):", "integer")
}

let nCols=solicitarDato("Número de columnas (>0): ", "integer")
while (nCols<=0) {
    nCols=solicitarDato("Número de columnas (>0): ", "integer")
}

// Creamos las matrices
const matriz1=Array.from({length:nFilas},el=>Array.from({length:nCols},el=>aleatorio(MIN,MAX+1)))
const matriz2=Array.from({length:nCols},el=>Array.from({length:nFilas},el=>aleatorio(MIN,MAX+1)))

console.log(matriz1,matriz2,producto2(matriz1,matriz2))
