/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso de métodos de los objetos String, Array, Math, ...
 *             Reforzar el aprendizaje en la creación de funciones declaradas
 *             Reforzar el aprendizaje en la creación de funciones expresadas
 *             Reforzar el aprendizaje en la creación de arrow functions
 *             Mejorar en la forma de programar
 *
 *   Tarea: n es automorfico si su cuadrado termina en n
 *
 *   Entrada : número entero: n
 *
 *   Salida  : El número n es|no es automórfico
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let n = solicitarDato("Introduce un numero:", "integer")

const CUADRADO = n * n;
const N = String(n);
const CADENACUADRADO = String(CUADRADO);
let mensaje = ``

/* Funcion declarada */

function automorficoDeclarada(n) {

    if (CADENACUADRADO.endsWith(N)) {

        mensaje = `El número ${n} es automórfico.`

    } else {

        mensaje = `El número ${n} no es automórfico.`

    }

    return mensaje
}

/* Funcion expresada */

let automorficoExpresada = function(n) {

    return CADENACUADRADO.endsWith(N) ? `El número ${n} es automórfico.` : `El número ${n} no es automórfico.`
    
};

/* Funcion con flecha */

let automorficoFlecha = () => {
    
    return CADENACUADRADO.endsWith(n) ? `El número ${n} es automórfico.` : `El número ${n} no es automórfico.`

}

console.log(automorficoDeclarada(n))
console.log(automorficoExpresada(n))
console.log(automorficoFlecha(n))