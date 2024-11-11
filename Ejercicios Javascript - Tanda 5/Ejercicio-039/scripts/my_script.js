/***************************************************************************************************************
 *
 *   Tarea: Practicar el uso de programación funcional mediante el uso del método reduce
 *
 *   Objetivo: Solicitar un número entero n
 *             Imprimir en la consola la suma de los números enteros entre 1 y n, donde n es un dato solicitado al usuario. 
 *             Imprimir en la consola la suma de cada término de la serie ((-1)^p+1)/(2*p-1), donde p va desde 1 a n
 *             Comprobar si esa suma coincide con n*(n+1)/2
 *
 *   Entrada : número entero: n
 *
 *   Salida  : La suma de 1+2+3+...n es XXXX
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

// Iterativamente de forma clásica
function sumaEnterosI(n){
    let sum=0
    for (let i=1;i<=n;i++)
        sum+=i
    return sum
}

// Recursivamente
function sumaEnterosR(n){
    if (n==1)
        return 1
    return n+sumaEnterosR(n-1)
}

// Con arrays
function sumaEnterosA(n){
    const numeros=Array.from({length:n},(el,i)=>i+1)
    return numeros.reduce((anterior,actual)=>anterior+actual,0)
}

// Comprobamos si n*(n+1)/2 es igual a 1+2+3+... empleando diferentes funciones
function comprobacion(n,funcion){
    return (n*(n+1))/2==funcion(n)
}

// Iterativamente de forma clásica
function calcularFuncion2I(n){
    let sum=0
    for (let i=1;i<=n;i++)
        sum+=((-1)**i+1)/(2*i-1)
    return sum
}

// Con Arrays
function calcularFuncion2A(n){
    const numeros=Array.from({length:n},(el,i)=>((-1)**(i+1)+1)/(2*(i+1)-1))
    return numeros.reduce((anterior,actual)=>anterior+actual,0)
}

let n=solicitarDato("Numero entero positivo: ","integer")
while (n<=0){
    n=solicitarDato("Numero entero positivo: ","integer")
}

console.log(comprobacion(n,sumaEnterosI))
console.log(calcularFuncion2A(n))