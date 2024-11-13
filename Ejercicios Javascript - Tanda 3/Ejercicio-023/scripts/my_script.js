/***************************************************************************************************************
 *
 *   Objetivo: Reforzar el aprendizaje de lógica de programación
 *             Reforzar el uso de funciones y template strings        
 *             Reforzar el uso básica del objeto document
 *             Reforzar el aprendizaje de la definicion de arrays (adicional)
 *             Reforzar el aprendizaje de programación funcional (adicional)
 *             Mejorar en separar lógica de programación de vista (adicional)
 * 
 *   Tarea: Cardio ! 
 *          Cuando realizas ejercicio físico puedes querer estimar las pulsaciones del corazón para
 *          no "quemarte". La formula Karvonen es un método que podemos emplear para determinar la
 *          frecuencia cardíaca:
 * 
 *                      FC=(((220-edad)-DFC)*I)+DFC
 * 
 *          donde:
 *               FC : Frecuencia cardiaca
 *               DFC: Frecuencia cardíaca en descanso
 *               I  : Intensidad
 * 
 *   Entrada : edad : entero
 *             frecuencia cardíaca en descanso: entero (ej: 65 pulsaciones por minuto)
 *             
 *             edad:22  DFC: 65
 * 
 *             Intensidad     Frecuencia
 *             --------------------------
 *                 55 %          138
 *                 ...           ...
 *                 95%           191
 *
 *   Salida  : tabla html que muestre la Frecuencia cardíaca para Intensdidades del 55% al 95%
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

const frecuenciaCardiaca=(edad,dfc,intensidad)=>(((220-edad)-dfc)*intensidad/100)+dfc

function pedirDato(msg,min,max=Infinity){
    let dato=solicitarDato(msg,"integer")
    while (dato<min||dato>max){
        if (max!=Infinity)
            alert(`El numero entero debe estar entre ${min} y ${max}`)
        else
            alert(`El numero entero debe ser mayor que ${min-1}`)
        dato=solicitarDato(msg,"integer")
    }
    return dato
}

function showTable(inicio,fin,paso,edad,dfc){
    let innerTable=Array.from({length:(fin-inicio)/paso+1},(el,i)=>i*5+inicio).map(intensidad=>`
        <tr>
            <td>${intensidad}</td>
            <td>${frecuenciaCardiaca(edad,dfc,intensidad)}</td>
        </tr>
    `).join('')
    document.querySelector("body").innerHTML=`
        <table border>
            <tr>
                <td>Intensidad</td>
                <td>Frecuencia</td>
            </tr>
            ${innerTable}
        </table>`
}

const INICIO=55
const FIN=95
const PASO=5

let edad=pedirDato("Edad: ",1)
let dfc=pedirDato("Frecuencia cardiaca en reposo: ",1)
showTable(INICIO,FIN,PASO,edad,dfc)



