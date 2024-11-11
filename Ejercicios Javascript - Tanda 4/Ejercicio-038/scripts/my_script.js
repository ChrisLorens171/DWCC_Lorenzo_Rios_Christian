/***************************************************************************************************************
 *
 *   Objetivo: Practicar la programación funcional en la resolución de problemas
 *             Practicar en el uso de arrow functions
 *             Reforzar el aprendizaje sobre arrays
 *             Aprender nuevos métodos del objeto Math
 *
 *   Tarea: Calcular la suma de los pares y de los impares de n elementos de un array generados
 *          aleatoriamente entre 1 y 10.
 *
 *   Entrada : n
 *
 *   Salida  : Los elementos pares del array son: x1, x2, x3, ...
 *             Los elementos impares del array son: x1, x2, x3, ...
 *             La suma de los elementos pares del array es: XXXX
 *             La suma de los elementos impares del array es: YYYY
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

function getData(msg,type,min=-Infinity,max=Infinity){
    let numero=solicitarDato(msg,type)
    while(numero<min||numero>max){
        numero=solicitarDato(msg,type)
    }
    return numero
}

const aleatorio=(min,max)=>parseInt(min+(max-min)*Math.random())

const MIN=1
const MAX=10
const LONGITUD=1000

let longitud=getData("Número de elementos aleatorios: ","integer",1,LONGITUD)
const numeros=Array.from({length:longitud},el=>aleatorio(MIN,MAX+1))

let sumaPares=numeros.filter(el=>el%2==0).reduce((anterior,actual)=>anterior+actual,0)
let sumaImpares=numeros.filter(el=>el%2==1).reduce((anterior,actual)=>anterior+actual,0)

console.log(`Array: ${numeros}`)
console.log(`Suma de los elementos pares del array: ${sumaPares}`)
console.log(`Suma de los elementos impares del array: ${sumaImpares}`)