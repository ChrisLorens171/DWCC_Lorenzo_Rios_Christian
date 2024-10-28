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
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

// Pedimos las 2 cadenas
let cadena1 = solicitarDato("Introduce una cadena: ", "string")
let cadena2 = solicitarDato("Introduce otra cadena: ", "string")
let mensaje = ""

// Limpiamos las cadena de espacios en blanco, las pasamos a minusculas, las convertimos en string que ordenamos y acabamos con un join() para volverlas strings
let arr1 = cadena1.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
let arr2 = cadena2.replace(/\s+/g, "").toLowerCase().split("").sort().join("");

// Comparamos las 2 cadenas y enseñamos por pantalla si son o no anagramas
(arr1 == arr2) ? mensaje = "Son anagramas" : mensaje = "No son anagramas"

console.log(mensaje)

