/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Practicar la programación iterativa y recursiva
 *             Valorar diferentes métodos de resolución de problemas, sus ventajas e inconvenientes
 * 
 *   Tarea: Buscar la subcadena palíndroma (se lee igual al revés) más larga.
 *          P.ej1: Dabalearrozalazorraelabad
 *          P.ej1: abbbaca
 *
 *   Entrada : Cadena de texto
 *
 *   Salida  : La subcadena palíndroma más larga es ......
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

// Comprueba si cadena es un palindrome de forma iterativa
function isPalindromeI1(cadena) {
    let cadena1=cadena.toLowerCase().split(' ').filter(el=>el!='').join('')
    let cadena2=cadena1.split('').reverse().join('')
    return cadena1==cadena2
}

// Comprueba si cadena es un palindrome de forma iterativa
function isPalindromeI2(cad) {
    let cadena=cad.toLowerCase().split(' ').filter(el=>el!='').join('')

    let limite=cadena.length%2==0?cadena.length/2:(cadena.length-1)/2
    let i=0
    while (i<limite&&cadena[i]==cadena[cadena.length-1-i])
        i++

    return cadena[i]==cadena[cadena.length-1-i]
}

//Comprueba si cadena es un palindrome de forma recursiva
function isPalindromeR(cad){
    let cadena=cad.toLowerCase().split(' ').filter(el=>el!='').join('')
    if (cadena.length==0||cadena.length==1)
        return true
    return cadena[0]==cadena[cadena.length-1]&&isPalindromeR(cadena.slice(1,cadena.length-1))
}

// No es la solución más óptima ya que es O(n³)
function palindromeMasLarga1(cad){
    let length = cad.length
    let index  = -1
    let maxlength = 0

    // Buscando subcadenas en cad
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            if (isPalindromeI1(cad.slice(i,j+1)) && j - i + 1 > maxlength) {
                index = i
                maxlength = j - i + 1
            }
        }
    }
    // Devolvemos la subcadena desde el indice actualizado hasta maxlength
    return cad.slice(index,index+maxlength)
}

// No es la solución más óptima ya que es O(n²)
function palindromeMasLarga2(cad){
    const n = cad.length;
    if (n === 0) return "";

    let start = 0;
    let maxLen = 1;

    for (let i = 0; i < n; i++) {   
        for (let j = 0; j <= 1; j++) {
            let low = i;
            let hi = i + j; 

            while (low >= 0 && hi < n && cad[low] === cad[hi]) {
                const currLen = hi - low + 1;
                if (currLen > maxLen) {
                    start = low;
                    maxLen = currLen;
                }
                low--;
                hi++;
            }
        }
    }

    return cad.substring(start, start + maxLen);
}

// La solución más óptima, ya que es O(n)
function palindromeMasLarga3(cad){
    let strLen = 2 * cad.length + 3

    // Insertando caracteres especiales para ignorar casos
    // espaciales al comienzo y final del array
    const sChars='@'+cad.split('').map(el=>`#${el}`).join('')+'#$'

    let maxLen = 0
    let start = 0
    let maxRight = 0
    let center = 0
    const p = Array.from({length:strLen},el=>0) 

    for(let i = 1; i < strLen - 1; i++){
        if (i < maxRight){
            p[i] = Math.min(maxRight - i, p[2 * center - i]);
        }

        // Expandiendo alrededor del centro
        while (sChars[i + p[i] + 1] == sChars[i - p[i] - 1]){
            p[i]++
        }

        // Actualizando el centro y su limite
        if (i + p[i] > maxRight){
            center = i
            maxRight = i + p[i]
        }

        // Actualizando la solución
        if (p[i] > maxLen){
            start = (i - p[i] - 1) / 2
            maxLen = p[i]
        }
    }
    return cad.slice(start, start+maxLen)
}

console.log(palindromeMasLarga1("acaabbbaca"))
