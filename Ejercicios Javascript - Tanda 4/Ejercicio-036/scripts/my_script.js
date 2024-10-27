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

import solicitarDato from "../../validarDatos.js"
 
function isInteger(cad){
    return !isNaN(cad)&&parseFloat(cad)==parseInt(cad)
}

function isValidDate(fechaNac,separator="/"){   
    let fecha=fechaNac.split(separator)
    if (fecha.length!=3||
        fecha[0].length!=2||
        fecha[1].length!=2||
        fecha[2].length!=4) {
            return false
        }

    let date=new Date(parseInt(fecha[2]),parseInt(fecha[1])-1,parseInt(fecha[0]))
    return date.getMonth()==parseInt(fecha[1])-1?true:false
}

let fechaNac=solicitarDato("Fecha (dd/mm/yyyy): ", "string")
console.log(`La fecha ${isValidDate(fechaNac,"/")?"":"no "}es correcta`)
