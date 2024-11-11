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

const persona={
    nombre:"Juan",
    edad:18,

    isOld(){
        return this.edad>=18
    }
}

console.log(`${persona.nombre}${persona.isOld()?" ":" no "}es mayor de edad`)