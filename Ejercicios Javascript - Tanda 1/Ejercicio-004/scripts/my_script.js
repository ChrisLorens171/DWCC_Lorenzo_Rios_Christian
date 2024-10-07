/***************************************************************************************************************
 *
 *   Objetivo: Aprender a validar datos de entrada 
 *             Aprender a realizar operaciones aritméticas
 *             Aprender a emplear métodos del objeto Math
 *             Reforzar el aprendizaje en el uso de template strings (adicional)
 *             Reforzar en el aprendizaje de programación y casos de tests (adicional)
 *
 *   Tarea: Solicitar al usuario que visita la página dos números enteros 
 *          Mostrar en la consola del navegador el resultado de sumarlos, restarlos, multiplicarlos y dividirlos
 *
 *   Entrada : número entero (Number): numero1
 *             número entero (Number): numero2
 *
 *   Salida  : La suma de numero1 y numero2 es: numero1+numero2
 *             La resta de numero1 y numero2 es: numero1-numero2
 *             El producto de numero1 y numero2 es: numero1*numero2
 *             La division de numero1 entre numero2 es: numero1/numero2
 *
 *   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
 *             ¿Cómo podemos limitar el número de decimales que se mostrarán?
 *             ¿Qué pasa en Javascript cuando el divisor es cero?
 *
 ***************************************************************************************************************/

let numero1 = new Number(prompt("Introduce un número: "))
let numero2 = new Number(prompt("Otro: "))

console.log(`La suma de ${numero1} y ${numero2} es: ${numero1 + numero2}`)
console.log(`La resta de ${numero1} y ${numero2} es: ${numero1 - numero2}`)
console.log(`El producto de ${numero1} y ${numero2} es: ${numero1 * numero2}`)
console.log(`La division de ${numero1} entre ${numero2} es: ${(numero1 / numero2).toFixed(2)}`)
console.log(`La division de ${numero1} entre ${numero2} es: ${Math.round(numero1 / numero2 * 100) / 100}`)

/* En javascript al dividir entre 0, el resultado es infinito */