/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *             Aprender a trabajar con problemas incompletos en definición
 *
 *   Tarea: Solicitar al usuario su peso (en kg) y su estatura (en metros)
 *          Calculamos el índice de masa corporal
 *          Mostrar por pantalla la frase "Tu índice de masa corporal es <imc>", donde <imc> corresponde 
 *          al indice de masa corporal redondeado con dos decimales 
 *          Indicar si hay riesgo de enfermedad coronaria.
 *
 *          El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
 *          estatura en metros:
 * 
 *                  peso (kg) / [estatura (m)]2
 *
 *          El riesgo de que una persona sufra enfermedades coronarias depende de su edad y su índice de masa
 *          corporal:
 *                               Edad<45     Edad>=45
 *                   IMC<=22.0    bajo         medio
 *                   IMC>=22.0    medio        alto
 *
 *   Entrada : número flotante: peso
 *             número flotante: estatura
 *
 *   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

const peso = solicitarDato("Introduce tu peso en kg", "integer")
const estatura = solicitarDato("Introduce tu estatura en metros", "float")
const edad = solicitarDato("Introduce tu edad", "integer")

let mensaje = ''

const imc = Math.round(peso / Math.pow(estatura, 2) * 100) / 100


// Riesgo en menos de 45 años

if (edad > 0 && edad < 45) {
    if (imc < 22.0) {
        mensaje = `Tu índice de masa corporal es ${imc}. Tienes un riesgo bajo de enfermedad coronaria`
    } else {
        mensaje = `Tu índice de masa corporal es ${imc}. Tienes un riesgo medio de enfermedad coronaria`
    }

// Riesgo en mas de 45 años

} else if (edad >= 45) {
    if (imc < 22.0){
        mensaje = `Tu índice de masa corporal es ${imc}. Tienes un riesgo medio de enfermedad coronaria`
    } else {
        mensaje = `Tu índice de masa corporal es ${imc}. Tienes un riesgo alto de enfermedad coronaria`
    }
}

console.log(mensaje)