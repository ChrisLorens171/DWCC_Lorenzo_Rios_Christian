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

import solicitarDato from "../../validarDatos.js"

const MESES=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

function getData(msg,type,min=-Infinity,max=Infinity){
    let numero=solicitarDato(msg,type)
    while(numero<min||numero>max){
        numero=solicitarDato(msg,type)
    }
    return numero
}

function isFriday13(month,year){
    let fecha=new Date(year,month-1,13)
    return fecha.getDay()==5?true:false
}

let year=getData("Año: ","integer",0,2300)
let month=getData("Mes: ","integer",1,12)

console.log(`El dia 13 del año ${year} del mes de ${MESES[month-1]} ${isFriday13(month,year)?"":"no "}es Viernes 13`)