/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *
 *   Tarea: Solicitamos tres números enteros al usuario 
 *          Mostramos cual es el mayor
  *
 *   Entrada : número entero: numero1
 *             número entero: numero2
 *             número entero: numero3
 *
 *   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let num1 = solicitarDato("Introduce un número: ", "integer")
let num2 = solicitarDato("Otro: ", "integer")
let num3 = solicitarDato("Otro: ", "integer")

/* Con if */

if (n1 >= n2 && n1 >= n3)
    
    console.log(`${num1} es el mayor`)

else if (n2 > n3)

    console.log(`${num2} es el mayor.`)

else

    console.log(`${num3} es el mayor.`)


/* Con operador ternario */

const MAYOR = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

console.log(`El mayor es ${MAYOR}`)