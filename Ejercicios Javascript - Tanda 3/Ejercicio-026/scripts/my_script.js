/***************************************************************************************************************
 *
 *   Objetivo: Aprender a buscar soluciones "no clásicas"
 *             Conocer métodos del objeto String
 *             Resolver problemas empleando programación funcional
 *
 *   Tarea: Mostrar un array de cadenas en forma rectangular
 *
 *   Entrada : una frase de texto
 *             P. ej.: Hola Mundo en un cuadrado
 *
 *   Salida  : la frase en un cuadrado
 * 
 *              ************
 *              * Hola     *
 *              * Mundo    *
 *              * en       *
 *              * un       *
 *              * cuadrado *
 *              ************
  *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

const CADENA = solicitarDato('Introduce una frase: ', 'string')

let arrayCadena = CADENA.split(' ')
let longitudMaxima = stringMasLarga(arrayCadena)
let borde = '*'.repeat(longitudMaxima + 4)
let resultado = ''

function stringMasLarga(arrayCadena) {  
    let masLarga = 0
    for(let palabra of arrayCadena) {
        if (palabra.length > masLarga) {
            masLarga = palabra.length
        }
    }
    return masLarga
}

resultado += `${borde}\n`

for (let palabra of arrayCadena) {
    let espaciosRestantes = ' '.repeat(longitudMaxima - palabra.length)
    resultado += (`* ${palabra}${espaciosRestantes} *\n`)
}

resultado += borde

console.log(resultado)








