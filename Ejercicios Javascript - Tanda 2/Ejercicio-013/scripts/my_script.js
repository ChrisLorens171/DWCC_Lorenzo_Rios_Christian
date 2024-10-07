/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso de los objetos String y Array
 *             Practicar en el uso de programación funcional
 *
 *   Tarea: Crear dos funciones. Una para validar bit de paridad par y otra para validar bit de paridad impar
 * 
 *           En caso de paridad par:
 *             Si el número de unos es impar, el último bit debe ser un 1
 *             Si el número de unos es par, el último bit debe ser un 0
 * 
 *          En caso de paridad impar:
 *             Si el número de unos es impar, el último bit debe ser un 0
 *             Si el número de unos es par, el último bit debe ser un 1
 *
 *   Entrada : 10110010   (multiplos de 8 caracteres)
 *
 *   Salida  : true (validar paridad impar) o false (validar partidad par) 
 *
 ***************************************************************************************************************/

let n = prompt("Introduce un numero binario de 8 digitos: ")

function validarPar(n){

    let binario = n.split('')

    return binario.filter(el => el == 1).length % 2 == 0

}
    
function validarImpar(n){

    let binario = n.split('')

    return binario.filter(el => el == 1).length % 2 != 0

}

console.log(`Paridad par = ${validarPar(n)}`)
    
console.log(`Paridad impar = ${validarImpar(n)}`)





