/***************************************************************************************************************
 * 
 *   Objetivo: Mejorar en programación modular
 *             Mejorar en lógica de programación                      
 * 
 *   Tarea: El número de Euler, e ≈ 2,71828, puede ser representado como la siguiente suma infinita:
 *
 *                     e =1/0!+1/1!+1/2!+1/3!+1/4!+…
 *
 *          n! es el factorial de un numero entero n y es el producto de 1 hasta n (0!=1)
 *
 *                           4! = 4 * 3 * 2 * 1
 *
 *          Calcular el valor aproximado de "e" hasta que la diferencia entre dos sumandos
 *          consecutivos sea menor que 0,0001
 *
 *   Entrada : ---
 *
 *   Salida  : 2,71...
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

// Calculamos el factorial de n de forma iterativa
function factorialI(n){
    if (n<0){
        throw new Error("Error! El numero debe ser un entero positivo")
    }
    let resultado=1
    for (let i=1;i<=n;i++)
        resultado*=i
    return resultado
}

// Calculamos el factorial de n de forma recursiva con una arrow function
const factorialR=(n)=>{
    if (n<0){
        throw new Error("Error! El numero debe ser un entero positivo")
    }
    return n==0?1:n*factorialR(n-1)
}

// Calculamos el valor de e hasta que la diferencia entre términos sea mayor que el error
function calcularE(error){
    let e=2
    let i=2
    let sumando1=1/factorialR(i)
    let sumando2=1/factorialI(i+1)
    while(sumando1-sumando2>error){
        e+=sumando1+sumando2
        i++
        sumando1=1/factorialR(i)
        sumando2=1/factorialI(i+1)
    }
    return e
}

/* 
try{
    factorialI(-3)
} catch (error) {
    console.log(error)
}
*/

console.log(calcularE(0.0001))