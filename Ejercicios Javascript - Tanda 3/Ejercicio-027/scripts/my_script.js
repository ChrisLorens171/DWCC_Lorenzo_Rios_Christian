/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en la lógica de programación
 *
 *   Tarea: Obtener la secuencia más larga de ceros indicando la posición de inicio. En caso de que existan varias,
 *          se indicará la primera.
 *
 *   Entrada : "011000010110000"
 *
 *   Salida  : Secuencia: "0000"   Posicion: 3
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

// Con programación "estándar"
// La función la generamos de la forma más "idonea" para
// poder emplearla buscando la secuencia más larga para
// de cualquier posible caracter 
function secuenciaMasLarga1(cadena,caracter){
    let longitud=0
    let longitudMax=0
    let posicionMax=0

    for (let i=0;i<cadena.length;i++){
        if (cadena[i]==caracter){
            longitud++
            if (longitud>longitudMax) {
                longitudMax=longitud
                posicionMax=i-longitudMax+1
            }
        } else {
            longitud=0
        }
    }
    return {
        longitud:longitudMax,
        posicion:posicionMax
    }
}

//Otra solución ingeniosa !
function secuenciaMasLarga2(cadena,caracter){
    let i=0
    while (cadena.includes(caracter.repeat(i))){
        i++
    }
    --i
    return {
        longitud:i,
        posicion:cadena.indexOf(caracter.repeat(i))
    }
}

// Obtenemos la cadena asegurandonos que no está vacía
// y que sólo tiene ceros y unos
let cadena=solicitarDato("Número binario: ","string")
while (!cadena.length||cadena.split('').some(el=>el!='0'&&el!='1')){
    alert("Error! Tienes que introducir un número binario")
    cadena=solicitarDato("Número binario: ","string")
}

let caracter="0"
let resultado=secuenciaMasLarga2(cadena,caracter)
console.log(`Secuencia: ${caracter.repeat(resultado.longitud)}   Posicion: ${resultado.posicion}`)

