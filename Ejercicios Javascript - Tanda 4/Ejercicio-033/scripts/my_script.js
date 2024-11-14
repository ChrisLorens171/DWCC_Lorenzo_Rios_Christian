/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en la resolución de ejercicios de lógica de programación
 *             Aprender a plantarse diferentes formas de resolver un problema
 *
 *   Tarea: Solicitar la fecha de nacimiento de una persona (dia, mes y año)
 *          Calcular el número de la suerte
 * 
 *          El número de la suerte se calcula sumando las cifras obtenidas en la suma
 * 
 *          Por ejemplo: si la fecha de nacimiento es el 12 de Julio de 1980
 *                                  12-7-1980 = 1999
 *                                  1+9+9+9 = 28
 *                                  2+8 = 10
 *                                  1+0 = 1   <---- Número de la suerte
 *
 *   Entrada : dia, mes, anho
 *
 *   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

const dia = solicitarDato("Introduce tu dia de nacimiento: ", "integer")
const mes = solicitarDato("Introduce tu mes de nacimiento: ", "integer")
const anho = solicitarDato("Introduce tu año de nacimiento: ", "integer")

function sumarCifras(num) {

    while (num >= 10) {
      num = num.toString().split('').reduce((contador, val) => contador + parseInt(val), 0)
    }

    return num
  }
  
function calcularNumeroDeLaSuerte(dia, mes, anho) {
    const sumaInicial = dia + mes + anho
    const numeroDeLaSuerte = sumarCifras(sumaInicial)

    return `Como has nacido el ${dia} de ${mes} de ${anho}, tu número de la suerte es ${numeroDeLaSuerte}`
}

  console.log(calcularNumeroDeLaSuerte(dia, mes, anho))
  
