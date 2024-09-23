/***************************************************************************************************************
 *
 *   Objetivo: Reforzar lógica de programación
 *             Reforzar en el uso de métodos del obejto window y console
 *             Reforzar el aprendizaje en el uso de operaciones matemáticas
 *
 *   Tarea: Solicitar el número de caramelos y el número de niños
 *          Calcular cuantos caramelos tocan por niño y cuantos sobran
 *
 *   Entrada : número entero positivo: nCaramelos 
 *             número entero positivo: nPeques
 *
 *   Salida  : Mostrar el resultado por consola con un mensaje como
 * 
 *                   El número de caramelos por niño es: XXXX
 *                   El número de caramelos que sobran es: YYYY
 *
 ***************************************************************************************************************/

import solicitarDato from "../../ValidarDatos.js"

let nCaramelos = solicitarDato("Número entero positivo de niños: ", "integer")
let nPeques = solicitarDato("Número entero positivo de caramelos: ", "integer")
 
caraNinhos = (nPeques / nCaramelos)
sobras = (nPeques % nCaramelos)

mensaje = `El número de caramelos por niño es: ${Math.round(caraNinhos * 100) / 100}
El número de caramelos que sobran es: ${sobras}`

alert(mensaje)
