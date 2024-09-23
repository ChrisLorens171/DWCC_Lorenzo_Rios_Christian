/***************************************************************************************************************
 *
 *   Objetivo: Reforzar el aprendizaje en el uso operadores aritméticos
 *             Reforzar en el uso de métodos del objeto Math
 *             Reforzar en el uso de template strings
 *             Aprender a definir y usar arrays (adicional)
 *             Aprender a usar métodos de programación funcional (adicional)
 *             Mejorar en la realización de programas (adicional)
  * 
 *   Tarea: Viajar es un placer, pero si visitamos un pais que no pertenezca a la Union Europea
 *          tenemos que cambiar la moneda.
 * 
 *          Crea un script se encargue de realizar la conversión de euros a dolares americanos.
 *          La conversión se calcula a través del tipo de cambio, es decir, cuantos dolares representa
 *          1 euro:
 *
 *                  Cantidad de dolares = Cantidad de euros * Tipo de cambio
 *
 *   Entrada : cantidad en euros: número flotante (2 decimales)
 *             tipo de cambio: número flotante
 *
 *   Salida  : Un mensaje del tipo
 * 
 *               E euros con el tipo de cambio C son D dolares
 *
 *   Adicional: Si tenemos los tipos de cambios recogidos para varios paises en un array, mostrar
 *              los cambios a dolares para los diferentes paises
 * 
 *  https://openexchangerates.org/
 * 
 ***************************************************************************************************************/

function convertirEuros(monedas, tipoCambio, euros) {
    let conversiones = [];

    for (let i = 0; i < monedas.length; i++) {

        let conversion = euros * tipoCambio[i]

        conversiones.push ({

            moneda: monedas[i],
            cantidad: conversion

        })
    }

    return conversiones;
}

let euros = prompt("Introduce la cantidad de euros");

let monedas = ["Dólares Americanos", "Libras Esterlinas", "Yenes Japoneses", "Francos Suizos", "Peso Mexicano"];
let tipoCambio = [1.10, 0.85, 130.5, 1.02, 21,61];

convertirEuros(monedas, tipoCambio, euros).forEach(resultado => {

    console.log(`${euros} euros son ${resultado.cantidad.toFixed(2)} ${resultado.moneda}`);

});
