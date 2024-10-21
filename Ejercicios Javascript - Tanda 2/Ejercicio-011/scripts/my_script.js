/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en lógica de programación
 *             Mejorar la eficiencia en el uso de recursos limitados
 *
 *   Tarea: Solicitamos, de forma repetida, números enteros hasta que ingresamos el número 0, 
 *          que no se tendrá en cuenta.
 *          Se mostrará cuál fue el mayor de los números enteros introducidos
 *
 *   Entrada : numero1, numero2, numero3,.....
 *
 *   Salida  : El mayor de numero1, numero2, numero3,.... es ....
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let num
let numMayor = null
let cadenaNumeros = ""

while (num != 0) {

    num = solicitarDato("Pon un número: ", "integer")
      
    if(num > numMayor) {

        numMayor = num
        
    }  

    cadenaNumeros += num + ", ";

}

console.log(`De ${cadenaNumeros}o mayor e ${numMayor}`)