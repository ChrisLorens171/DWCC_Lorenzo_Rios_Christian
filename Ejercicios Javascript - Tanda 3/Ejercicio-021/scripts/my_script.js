/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso de los objetos String y Array
 *             Practicar en el uso de programación funcional
 *
 *   Tarea: Multas de tráfico por alcohol.
 *          Solicita el peso, genero, número de copas, la cantidad de alcohol
 *          por volumen de las bebidas consumidas y el tiempo desde la última
 *          bebida.
 *          Calcula la cantidad de alcohol en sangre empleando esta formula:
 * 
 *                 AES = (A * 5.14 / P * r) - 0.015 * T
 * 
 *          donde:
 * 
 *             A: Alcohol total consumido (en onzas)
 *             P: Peso de la persona en pounds
 *             r: Relación de distribución de alcohol
 *                   0.73 para hombres
 *                   0.66 para mujeres
 *             T: Tiempo en horas desde la última bebida
 *
 *   Salida  : Muestra un mensaje determinando si es o no legal conducir comparandolo
 *             con un nivel en sangre de alcohol de 0.08
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

function pedirDato(msg,tipo,min,max=Infinity){
    let dato=solicitarDato(msg,tipo)
    while (dato<min||dato>max){
        if (max!=Infinity)
            alert(`El numero ${tipo} debe estar entre ${min} y ${max}`)
        else
            alert(`El numero ${tipo} debe ser mayor que ${min}`)
        dato=solicitarDato(msg,tipo)
    }
    return dato
}

// Convertimos onzas en litros
// Convertimos libras en kilos
const alcoholEnSangre=(alcohol,peso,sexo,tiempo)=>(alcohol * 514 / (3*peso/0.45359) * sexo.toLocaleLowerCase()=="hombre"?0.73:0.66) - 0.015 * tiempo

const LIMITE=0.08
let alcoholConsumido=pedirDato("Alcohol consumido (litros): ","float",0)
let peso=pedirDato("Peso (Kg): ","float",0)
let sexo=solicitarDato("Sexo (Hombre o Mujer): ","string")
let tiempo=pedirDato("Tiempo transcurrido desde la última bebida: ","float",0)

console.log(alcoholEnSangre(alcoholConsumido,peso,sexo,tiempo))
console.log(`Circular ${alcoholEnSangre(alcoholConsumido,peso,sexo,tiempo)<LIMITE?"":"no "}es legal`)
