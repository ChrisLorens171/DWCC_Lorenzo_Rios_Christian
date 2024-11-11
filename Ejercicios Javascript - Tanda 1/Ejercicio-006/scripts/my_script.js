/***************************************************************************************************************
 *
 *   Objetivo: Aprender a usar diferentes estructuras de programación condicionales
 *             Reforzar en el uso de métodos del objeto window
 *             Mejorar en lógica de programación
 *
 *   Tarea: Solicitar al usuario que visita la página web su edad 
 *          Mostrar un mensaje en función de ella
 * 
 *          Realizar la tarea de dos formas: empleando if y empleando switch
 *
 *   Entrada : número entero (Number): edad
 *
 *   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
 *             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
 *             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
 *
 *   Notas   : Debemos comprobar que la edad sea un número entero mayor que 0 (indicaremos el error)
 *             La edad no puede ser superior a 120
 *
 ***************************************************************************************************************/
import solicitarDato from "../../ValidarDatos.js"

let edad = solicitarDato("Introduce tu edad","integer")
let mensaje1
let mensaje2

alert(edadIf(edad))
alert(edadSwitch(edad))

/* Con if */

function edadIf (edad) {

    if (edad > 0 & edad < 30) {

        mensaje1 = ("¡ Ponte a trabajar !")

    } else if (edad > 30 & edad <= 64 ) {

        mensaje1 = ("¡ Que ganas tengo de jubilarme !")

    } else if (edad > 64 & edad < 120) {

        mensaje1 = ("¡ Descansa un poco !")

    } else {

        mensaje1 = ("Debe ser un número entre 0 y 120")
    }
    
    return mensaje1
}

/* Con Switch */

function edadSwitch (edad) {

    switch (true) {

        case (edad < 30):
            
            mensaje2 = ("¡ Ponte a trabajar !")

        break

        case (edad > 30 && edad <= 64):

            mensaje2 = ("¡ Que ganas tengo de jubilarme !")

        break

        case (edad > 64 && edad <= 120):
            
            mensaje2 = ("¡ Descansa un poco !")

        break
    }

    return mensaje2
}