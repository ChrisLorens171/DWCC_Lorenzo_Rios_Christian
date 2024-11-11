/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en lógica de programación
 *
 *   Tarea: Comprobar si dos cadenas son un anagrama 
 *          Una palabra es anagrama de otra si las dos tienen las mismas letras, con el mismo 
 *          número de apariciones, pero en un orden diferente
 *
 *   Entrada : cadena1:cadena de caracteres
 *             cadena2:cadena de caracteres
 * 
 *   Salida  : Mensaje indicando si ambas cadenas son anagramas o no
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

// Funcion que indica si cadena1 y cadena2 son anagramas
// Convertimos cada cadena en un array, lo ordenamos y lo volvemos a cobertir en una cadena
// Es anagrama si hay algún caracter que no está en la misma posición y las cadenas anteriores
// coinciden
function isAnagrama1(cadena1,cadena2){
    let cad1=cadena1.split('').sort().join('')
    let cad2=cadena2.split('').sort().join('')

    return cadena1.split('').some((el,i)=>el!=cadena2[i])&&cad1==cad2
}

// Funcion que indica si cadena1 y cadena2 son anagramas
// Comprobamos si el número de letras de cada caracter de cadena1 coincide
// con el número de letras de ese caracter en cadena2 y si hay alguna letra
// en una posicion diferente
function isAnagrama2(cadena1,cadena2){
    if (cadena1.length!=cadena2.length)
        return false
    
    return cadena1.split('').every(letra=>cadena1.split('').filter(el=>el==letra).length==cadena2.split('').filter(el=>el==letra).length) &&
           cadena1.split('').some((letra,i)=>letra!=cadena2[i])
}

// Funcion que calcula la frecuencia de cada caracter en el array caracteres
// en cadena
function calcularFrecuencias(cadena,caracteres){
    const frecuencias={}

    // Con expresiones regulares
    caracteres.forEach(letra=>{
        let resultado=cadena.match(new RegExp(`${letra}`,"g"))
        frecuencias[letra]=resultado?resultado.length:0
    })
    return frecuencias
}

// Funcion que indica si cadena1 y cadena2 son anagramas
// viendo si coinciden las frecuencias de cada caracter y si hay alguna letra
// en una posicion diferente
function isAnagrama3(cadena1,cadena2){
    if (cadena1.length!=cadena2.length)
        return false
    
    let frecuencias1=calcularFrecuencias(cadena1,cadena2.split(''))
    let frecuencias2=calcularFrecuencias(cadena2,cadena1.split(''))
    
    return Object.keys(frecuencias1).every(el=>frecuencias1[el]==frecuencias2[el]) && 
           cadena1.split('').some((letra,i)=>letra!=cadena2[i])
}

console.log(isAnagrama1("aasdfg","asadf"))
console.log(isAnagrama1("aasdf","aasdf"))
console.log(isAnagrama1("aasdf","asadf"))