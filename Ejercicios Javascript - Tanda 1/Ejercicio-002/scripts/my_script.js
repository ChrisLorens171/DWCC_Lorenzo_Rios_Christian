/***************************************************************************************************************
 *
 *   Objetivo: Aprender a solicitar datos al usuario mediante métodos del objeto window
 *
 *   Tarea: Solicitar al usuario que visita la página su nombre 
 *          Mostrar un mensaje de bienvenida en la consola del navegador
 *
 *   Entrada : cadena de caracteres (nombre de la persona)
 *
 *   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
 *
 ***************************************************************************************************************/

import solicitarDato from "../../ValidarDatos.js"

let nombre = solicitarDato("Introduce tu nombre: ", "string")

console.log(`Bienvenido a mi página, ${nombre}`)