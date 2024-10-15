/***************************************************************************************************************
 *
 *   Objetivo: Reformar en lógica de programación
 *             Aprender nuevos métodos de String/Array
 *             Aprender a programar pensando en datos de entrada
 *             Reforzar en la programación funcional
 *             Reforzar en el uso de métodos de array
 *
 *   Tarea: Solicita un texto y una palabra.
 *
 *   Entrada : cadena de texto: texto
 *             cadena de texto: palabra
 *
 *   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

function solicitarCadena(msg){
  let cadena=solicitarDato(msg,"string")
  while (!cadena.length){
      cadena=solicitarDato(msg,"string")
  }
  return cadena.toLocaleLowerCase()
}

let frase=solicitarCadena("Frase: ")
let palabra=solicitarCadena("Palabra a buscar: ")

const posiciones=[]
let posicion=frase.indexOf(palabra)
while(posicion!=-1){
    posiciones.push(posicion)
    posicion=frase.indexOf(palabra,posicion+1)
}

let solucion=posiciones.length
?`La palabra "${palabra}" podemos encontrarla en la frase 
"${frase}"
a partir de las posiciones: ${posiciones.join(", ")}`
:`No podemos encontrar la palabra ${palabra} en la frase 
"${frase}" `

console.log(solucion)