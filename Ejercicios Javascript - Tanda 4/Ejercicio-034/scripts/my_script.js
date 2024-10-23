/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en lógica de programación
 *             Aprender a usar el objeto Date y sus métodos
 *             Perseverar en la comprobación de datos introducidos por un usuario
 *
 *   Tarea: Dado mes y año, determinar si el mes tiene un Viernes 13
 *
 *   Entrada : año  (1920) y mes (01)
 *
 *   Salida  : El mes Enero de 1920 no tiene un Viernes 13
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let anho = solicitarDato("Introduce un año: ", "string")
let mes = solicitarDato("Introduce un mes: ", "string")
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

let mensaje = `El mes ${meses[mes-1]}} de ${anho} no tiene un Viernes 13`

  
let fecha = new Date(anho, mes-1, 13)

if (fecha.getDay() == 5) {
    mensaje = `El mes ${meses[mes-1]} de ${anho} tiene un Viernes 13`
}

console.log(mensaje)
