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

import solicitarDato from "../../validarDatos.js"

function isInteger(cad){
    return !isNaN(cad)&&parseFloat(cad)==parseInt(cad)
}

function isValidDate(day,month,year){   
    if (month.length!=2||
        day.length!=2||
        year.length!=4) {
            return false
        }

    let fecha=new Date(year,month-1,day)
    return fecha.getMonth()==month-1?true:false
}

function getValidDate(msg,separator="/"){
    let fechaNac=solicitarDato(msg, "string")
    let fecha=fechaNac.split(separator)
    
    while (!(fecha.length==3&&isValidDate(...fecha))){
        fechaNac=solicitarDato(msg, "string")
        fecha=fechaNac.split(separator)
    }
    return fecha.map(el=>parseInt(el))
}

function calcNumeroDeSuerteIterativa(fecha){
    let inicio=fecha.reduce((anterior,actual)=>anterior+actual,0).toString()
    while(inicio.length>1){
        inicio=inicio.split('').map(el=>parseInt(el)).reduce((anterior,actual)=>anterior+actual,0).toString()
    }
    return inicio
}

function calcNumeroDeSuerteRecursiva(fecha){
    let inicio=fecha.reduce((anterior,actual)=>anterior+actual,0).toString()
    if (inicio.length==1)
        return inicio
    return calcNumeroDeSuerteRecursiva(inicio.split('').map(el=>parseInt(el)))
}

console.log(calcNumeroDeSuerteIterativa(getValidDate("Fecha de nacimiento (dd/mm/yyyy): ")))
//console.log(calcNumeroDeSuerteRecursiva(getValidDate("Fecha de nacimiento (dd/mm/yyyy): ")))

