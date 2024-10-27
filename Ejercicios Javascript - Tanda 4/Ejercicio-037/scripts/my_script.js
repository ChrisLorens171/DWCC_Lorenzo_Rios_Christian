/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso del objeto Date
 *
 *   Tarea: Solicitar dos fechas en formato dd/mm/aaaa 
 *          Indicar los días transcurridos entre las dos fechas
 *
 *   Entrada : 31/01/2013 02/02/2013
 *
 *   Salida  : 2 días
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

function isInteger(cad){
    return !isNaN(cad)&&parseFloat(cad)==parseInt(cad)
}

function isValidDate(day,month,year){   
    if (!isInteger(day)||
        !isInteger(month)||
        !isInteger(year)||
        month<1||
        month>12||
        year<0||
        month.length!=2||
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

function getDaysInBetween(fecha1,fecha2){
    const [day1,month1,year1]=fecha1
    const [day2,month2,year2]=fecha2

    let fechaInicial=new Date(year1,month1-1,day1)
    let fechaFinal=new Date(year2,month2-1,day2)

    if (fechaFinal>fechaInicial) {
        return (fechaFinal-fechaInicial)/(1000*60*60*24)
    } else {
        return -1
    }
}

let fecha1=getValidDate("Fecha inicial: ")
let fecha2=getValidDate("Fecha final: ")

let dias=getDaysInBetween(fecha1,fecha2)
let resultado=""
if (dias>=0)
   resultado=`Entre las fechas ${fecha1[0].toString().padStart(2,"0")}/${fecha1[1].toString().padStart(2,"0")}/${fecha1[2]} y ${fecha2[0].toString().padStart(2,"0")}/${fecha2[1].toString().padStart(2,"0")}/${fecha2[2]} transcurren ${dias} dias`
else { 
   resultado=`La fecha final debe ser mayor que la inicial`
}
console.log(resultado)

