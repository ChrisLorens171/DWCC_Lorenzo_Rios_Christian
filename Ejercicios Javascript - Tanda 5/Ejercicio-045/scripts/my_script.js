/***************************************************************************************************************
 *
 *   Objetivo: Aprender a definir con objetos literales
 *             Aprender a acceder a métodos del objeto
 *
 *   Tarea: Crear un objeto persona con nombre, edad y un metodo que determine si es mayor o no de edad
 *
 *   Entrada : cadena de texto: nombre
 *             número entero positivo: edad
 *
 *   Salida  : XXXXXX es|no es mayor de edad
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let nombre = solicitarDato("Introduce el nombre: ", "string");
let edad = solicitarDato("Introduce la edad: ", "integer");

const persona = {
    nombreP: nombre,
    edadP: edad,
    mayorEdad: function() {
        let resultado
        (this.edadP >= 18) ? resultado = `${this.nombreP} es mayor de edad` : resultado = `${this.nombreP} no es mayor de edad`
        return resultado
    }
};

console.log(persona.mayorEdad())
