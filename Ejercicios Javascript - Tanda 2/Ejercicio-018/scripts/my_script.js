/***************************************************************************************************************
 *
 *   Objetivo: Refozar el aprendizaje en definir y usar funciones declaradas y expresadas
 *             Entender la diferencia entre funciones declaradas y funciones expresadas
 *             Reforzar en el uso de arrow functions
 *             Reforzar el aprendizaje en la definicion de arrays con el método estático Array.from
 *             Aprender a emplear métodos del objeto Array para la programación funcional
 *             Mejorar la forma de programar
 *
 *   Tarea: Solicitar un número entero positivo, n
 *          Generar los primeros n números primos
 *
 *          Nota: Un número p es primo si sólo es divisible por 1 y por p
 *
 *   Entrada : numero entero: n
 *
 *   Salida  : 1, 3, 5, 7, ...
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let n = solicitarDato("Introduce un numero para saber si es primo: ", "integer")
let esPrimo = true

/* Funcion declarada */

function esPrimoDeclarada(n) {

    if (n > 1) {

        for (let i = 2; i <= n / 2; i++) { //Si el numero es divisible por 2 con resto 0, no es primo
                    
            if (n % i == 0){
                
                esPrimo = false
                
            }
        }

    } else {

        console.log(`${n} no es primo`)
    }

    return esPrimo;

}

/* Funcion expresada */

let esPrimoExpresada = function(n) {

    if (n > 1) {

        for (let i = 2; i <= n / 2; i++) { //Si el numero es divisible por 2 con resto 0, no es primo
                    
            if (n % i == 0){
                
                esPrimo = false
                
            }
        }

    } else {

        console.log(`${n} no es primo`)
    }

    return esPrimo;

}

/* Funcion flecha */

let esPrimoFlecha = () => {
    
    if (n > 1) {

        for (let i = 2; i <= n / 2; i++) { //Si el numero es divisible por 2 con resto 0, no es primo
                    
            if (n % i == 0){
                
                esPrimo = false
                
            }
        }

    } else {

        console.log(`${n} no es primo`)
    }

    return esPrimo;

}


console.log(esPrimoDeclarada(n))
console.log(esPrimoExpresada(n))
console.log(esPrimoFlecha(n))