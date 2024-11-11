/***************************************************************************************************************
 *
 *   Objetivo: Aprender métodos del objeto array
 *
 *   Tarea: Tenemos n números enteros consecutivos (salvo uno) desordenados en un array. 
 *          Buscar el número entero "perdido".
 *
 *   Entrada : ---
 *
 *   Salida  : El entero que falta en el array
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

// Funcion que devuelve un número aleatorio enterio entre [min,max)
// Incluye min, pero no max
const aleatorio=(min,max)=>parseInt(min+(max-min)*Math.random())

// Devolvemos un array en el que los elementos del array pasado 
// se encuentran en otra posicion (aleatoria)
function desordenar(array){
    const resultado=[...array]
    const vector=[]

    while(resultado.length){
        let index=aleatorio(0,resultado.length)
        vector.push(resultado[index])
        resultado.splice(index,1)
    }
    return vector
}

// Buscamos el número perdido
// Localizamos el menor valor y lo autoincrementamos mientras lo localicemos
// Cuando se pare es que ese es el valor que no está
function buscarPerdido(array){
    let min=Math.min(...array)+1

    while(array.includes(min))
        min++

    return min
}

let n=solicitarDato("Número de enteros consecutivos (>0): ", "integer")
while (n<=0) {
    n=solicitarDato("Número de enteros consecutivos (>0):", "integer")
}

// Creamos de enteros entre 1 y n ordenados
const vector=Array.from({length:n},(el,i)=>i+1)

// Eliminamos un elemento del array que se encuentra en una posicion aleatoria
// evitando que sea el primer o último elemento
let numero=aleatorio(0,vector.length)
while(numero==0||numero==vector.length-1){
    numero=aleatorio(0,vector.length)
}
vector.splice(numero,1)

// Desordenamos el vector
const vectorDesordenado=desordenar(vector)

console.log(`El número entero que falta en ${vectorDesordenado} es: ${buscarPerdido(vectorDesordenado)}`)



