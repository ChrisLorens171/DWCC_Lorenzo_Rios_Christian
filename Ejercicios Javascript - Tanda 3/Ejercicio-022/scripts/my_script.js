/***************************************************************************************************************
 *
 *   Objetivo: Aprender a abordar el problema de diferentes formas determinando las ventajas/inconvenientes
 *             Mejorar en la lógica de programación
 *             
 *   Tarea: Solicitamos un número entero n positivo. 
 *          Si n es par, se divide por 2 y su n es impar se multiplica por tres y suma uno. 
 *          El proceso se repite hasta que n tenga el valor de 1.
 * 
 *             Por ejemplo, la secuencia para n=3 será:
 *
 *                  3--> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1
 *
 *   Entrada : numero entero n entre 1 y 100
 *
 *   Salida  : La secuencia de valores obtenida
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

function pedirDato(msg,min,max=Infinity){
    let dato=solicitarDato(msg,"integer")
    while (dato<min||dato>max){
        if (max!=Infinity)
            alert(`El numero entero debe estar entre ${min} y ${max}`)
        else
            alert(`El numero entero debe ser mayor que ${min-1}`)
        dato=solicitarDato(msg,"integer")
    }
    return dato
}

// No es una buena forma porque devuelve los datos como cadena
function CollatzIterativo1(n){
    if (n==1)
        return 1
    else {
        let numerosStr=``
        do{
            numerosStr+=`${n}-->`
            n=(n%2)?3*n+1:n/2 
        } while(n!=1)
        return `${numerosStr}1`
    }
}

// Es preferible al anterior
function CollatzIterativo2(n){
    const numeros=[]

    numeros.push(n)
    while (n!=1){
        n=(n%2)?3*n+1:n/2
        numeros.push(n)
    }
    return numeros
}

function CollatzRecursivo(n){
    if (n==1)
        return 1
    else
        return `${n}-->${n%2?CollatzRecursivo(3*n+1):CollatzRecursivo(n/2)}`
}

let inicio=pedirDato("Numero entero de inicio: ",1)
console.log(CollatzIterativo1(inicio))
//console.log(CollatzIterativo2(inicio).join("-->"))
//console.log(CollatzRecursivo(inicio))
