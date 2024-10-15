/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Practicar la programación iterativa y recursiva
 *             Valorar diferentes métodos de resolución de problemas, sus ventajas e inconvenientes
 * 
 *   Tarea: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
 *          P.ej: Dabale arroz a la zorra el abad
 *
 *   Entrada : Cadena de texto
 *
 *   Salida  : La cadena .... (es|no es) un palíndromo
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

function isPalindromeIterativa(cadena){
    let cadenaStr=cadena.split(' ').filter(el=>el!='').map(el=>el.toLowerCase()).join('')

    let limite=cadenaStr.length%2?cadenaStr.length/2:(cadenaStr.length-1)/2
    let i=0
    let palindromo=cadenaStr[i]==cadenaStr[cadenaStr.length-i-1]
    while(palindromo&&i<=limite){
        i++
        palindromo=cadenaStr[i]==cadenaStr[cadenaStr.length-i-1]
    }
    return palindromo
}

function isPalindromeRecursiva(cadena){
    let cadenaStr=cadena.split(' ').filter(el=>el!='').map(el=>el.toLowerCase()).join('')

    if (cadenaStr.length==0||cadena.length==1)
        return true
    else
        return cadenaStr[0]==cadenaStr[cadenaStr.length-1]&&isPalindromeRecursiva(cadenaStr.slice(1,cadenaStr.length-1))
}

// Obtenemos la frase asegurandonos que no está vacía
let frase=solicitarDato("Frase: ","string")
while (!frase.length){
    alert("Tienes que introducir una frase")
    frase=solicitarDato("Frase: ","string")
}

let solucionIterativa=`La cadena: \n\n${frase}\n\n${!isPalindromeIterativa(frase)?"NO ":""}ES un palindromo`
console.log(solucionIterativa)
solucion=`La cadena: \n\n${frase}\n\n${!isPalindromeRecursiva(frase)?"NO ":""}ES un palindromo`
console.log(solucionRecursiva)

