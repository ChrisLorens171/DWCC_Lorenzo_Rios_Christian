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
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

const $body = document.querySelector("body")

let edad = solicitarDato("Edad", "integer")
let dfc = solicitarDato("Frecuencia cardíaca en descanso", "integer")
let frecuencia 

let tabla = '<table align="center">'

for (let i = 55; i <= 95; i++) {

    frecuencia = (((220-edad)-dfc)*(i/100))+dfc

    tabla +=`<tr>
                <td>${i}%</td>
                <td> => </td>
                <td>${Math.round(frecuencia)}</td>
            </tr>`
}

tabla += "</table>"

$body.innerHTML = tabla