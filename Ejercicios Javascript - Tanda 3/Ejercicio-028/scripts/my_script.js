/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Practicar la programación iterativa y recursiva
 *             Valorar diferentes métodos de resolución de problemas, sus ventajas e inconvenientes
 *             Aprender a emplear funciones definadas por el usuario
 *
 *   Tarea: Mostrar la serie de Fibonacci hasta el número indicado por el usuario
 *          Cada elemento de la serie de Fibonacci se calcula sumando los dos anteriores. 
 *          Los dos primeros elementos de la serie son 0 y 1
 * 
 *          Realizar dos versiones: la versión iterativa y la recursiva
 *
 *   Entrada : n
 *
 *   Salida  : 0,1,2,3,5,8,13,....
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

// Números fibonacci hasta n
function fibonacci(n,funcion){
    const fibo=[]

    let numero
    let i=0
    do {
        numero=funcion(i)
        if (numero<n) {
            fibo.push(numero)
        }
        i++
    } while (numero<n)
    return fibo
}

// n-esimo número fibonacci
// calculado mediante un algoritmo recursivo
function fibonacciRecursivo(n){
    if (n==0||n==1)
        return n
    return fibonacciRecursivo(n-1)+fibonacciRecursivo(n-2)
}

// n-esimo número fibonacci
// calculado mediante un algoritmo iterativo
function fibonacciIterativo(n){
    if (n==0||n==1)
        return n

    let f0=0
    let f1=1
    let fn
    /* 
    let i=2
    do {
        fn=f0+f1
        f0=f1
        f1=fn
        i++
    } while(i<=n)
    */

    for (let i=2;i<=n;i++){
        fn=f0+f1
        f0=f1
        f1=fn
    }
    return fn
}

let n=solicitarDato("Números Fibonacci hasta el...: ","integer")
while (n<0) {
    alert("El numero tiene que ser un entero positivo")
    n=solicitarDato("Números Fibonacci hasta el...: ","integer")
}

console.log(`Los números finonacci hasta ${n} son: ${fibonacci(n,fibonacciIterativo).join(", ")}`)
console.log(`Los números finonacci hasta ${n} son: ${fibonacci(n,fibonacciRecursivo).join(", ")}`)

// n elementos Fibonacci
//const secuenciaFibonacci=Array.from({length:n},(el,i)=>fibonacciRecursivo(i))

