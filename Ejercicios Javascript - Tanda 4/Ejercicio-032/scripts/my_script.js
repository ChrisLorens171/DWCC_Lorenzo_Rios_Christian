/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *             Aprender a mejorar la forma de resolver un problema una vez ya fue resuelto
 *
 *   Tarea: Solicitar el número de segundos que estamos confinados por una pandemia
 *
 *   Entrada : número entero positivo: segundos
 *
 *   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

function getNumero(msg,tipo,min=-Infinity,max=Infinity){
    let numero=solicitarDato(msg,tipo)
    while(numero<min||numero>max){
        numero=solicitarDato(msg,tipo)
    }
    return numero
}

function calcularTiempo(segundos){
    const resultados=[]
    tiempos.forEach(el=>{
        resultados.push(parseInt(segundos/el))
        segundos=segundos%el
    })
    return resultados
}

const tiempos=[60*60*24*7,60*60*24,60*60,60,1]
const medidas=["semana","dia","hora","minuto","segundo"]

let segundosConfinados=getNumero("Segundos confinados: ","integer",1)
const resultados=calcularTiempo(segundosConfinados)
console.log(`Hemos estado confinados ${resultados.map((el,i)=>`${el} ${medidas[i]}${el==1?"":"s"}` ).join(', ')}`)
