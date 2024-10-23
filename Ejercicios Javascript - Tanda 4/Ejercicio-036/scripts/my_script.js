/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en lógica de programación
 *             Aprender a usar el objeto Date y sus métodos
 *             Perseverar en la comprobación de datos introducidos por un usuario
 *
 *   Tarea: Solicitar una fecha a un usuario (en formato día/mes/año) 
 *          Comprobar si es correcta o existe.
 * 
 *          Tener en cuenta que el año puede ser bisiesto
 *          Si es bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
 *
 *   Entrada : dia/mes/anho
 *
 *   Salida  : La fecha dia/mes/anho (es|no es) correcta
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let fecha = solicitarDato("Introduce una fecha con formato (dd/mm/aa): ", "string").split("/")
let dia = fecha[0]
let mes = fecha[1]
let anho = fecha[2]

let mensaje = ""

let maxDias = new Date(anho, mes, 0).getDate()

if (dia > 0 && dia <= maxDias && mes > 0 && mes < 13) {
    mensaje = `La fecha ${fecha.join("/")} es correcta`
} else {
    mensaje = `La fecha ${fecha.join("/")} es incorrecta`
}

console.log(mensaje)



