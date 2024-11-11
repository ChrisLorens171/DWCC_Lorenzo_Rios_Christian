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

import solicitarDato from "../../validarDatos.js"

// Obtenemos la frase asegurandonos que no está vacía
let frase=solicitarDato("Frase: ","string")
while (!frase.length){
    alert("Tienes que introducir una frase")
    frase=solicitarDato("Frase: ","string")
}

// Creamos un array con las palabras. Evitamos elementos vacios.
const palabras=frase.split(' ').filter(el=>el!='')

// Longitud de la palabra más larga
let longitudMax=Math.max(...palabras.map(el=>el.length))

// Todas las palabras con * por los lados rellenado con los espacios en blanco necesarios
let resultado=palabras.map(el=>`* ${el}${" ".repeat(longitudMax-el.length)} *`).join('\n')

// Añadimos el encabezado y final con todas las *
resultado=`
${"*".repeat(longitudMax+4)}
${resultado}
${"*".repeat(longitudMax+4)}`

console.log(resultado)
