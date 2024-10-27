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
 *          estatura en metros.
 *
 *          El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
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

import solicitarDato from "../../validarDatos.js"

function getData(msg,type,min=-Infinity,max=Infinity){
    let numero=solicitarDato(msg,type)
    while(numero<min||numero>max){
        numero=solicitarDato(msg,type)
    }
    return numero
}

const imc=(peso,altura)=>peso/Math.pow(altura,2)

let peso=getData("Peso (Kg): ","float",0,120.0)
let altura=getData("Altura (m): ","float",0,2.4)
let edad=getData("Edad (Años): ","integer",0,120)

let imcPersona=imc(peso,altura)
let resultado=`Tu índice de masa corporal es ${imcPersona.toFixed(2)}. `
switch(true) {
    case (edad<45&&imcPersona<=22):
        resultado+=`Tienes un riesgo bajo de enfermedad coronaria`
        break
    case (edad<45&&imcPersona>22):
        resultado+=`Tienes un riesgo medio de enfermedad coronaria`
        break
    case (edad>=45&&imcPersona<=22):
        resultado+=`Tienes un riesgo medio de enfermedad coronaria`
        break
    case (edad>45&&imcPersona>22):
        resultado+=`Tienes un riesgo alto de enfermedad coronaria`
        break
}

console.log(resultado)

