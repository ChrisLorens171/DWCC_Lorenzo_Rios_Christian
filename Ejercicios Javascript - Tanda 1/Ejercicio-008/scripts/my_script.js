/***************************************************************************************************************
 *
 *   Objetivo: Reflexionar sobre el tipo de estructura de programación a emplear que permita resolver la tarea
 *             de la forma más eficiente
 * 
 *   Tarea: Solicitar al usuario el porcentaje de acierto en un examen tipo test 
 *          Mostrar la cualificación según la nota según la siguiente tabla
 *
 *                Cualificación    Porcentaje
 *                     A             90-100
 *                     B             80-90
 *                     C             70-79
 *                     D             60-69
 *                     F             0-59
 *
 *   Entrada : número entero entre 0 y 100 (ambos incluidos): nota
 *
 *   Salida  : El examen se cualifica con un XXX
 *
 ***************************************************************************************************************/

import solicitarDato from "../../ValidarDatos.js"

let nota = solicitarDato("Número entero entre 0 y 100 (ambos incluidos): ", "integer")
let mensaje

function darNota (nota) {

    switch (true) {

        case (nota > 0 && nota < 59):
            
            mensaje = "F"

        break

        case (nota > 59 && nota <= 69):

            mensaje = "D"

        break

        case (nota > 69 && nota <= 80):
            
            mensaje = "C"

        break

        case (nota > 79 && nota <= 90):
            
            mensaje = "B"

        break

        case (nota > 90 && nota <= 100):
            
            mensaje = "A"

        break

        default:

        mensaje = "Nota incorrecta"
    }

    return mensaje

}

darNota(nota)
alert(`${mensaje}`)

