/***************************************************************************************************************
 *
 *   Objetivo: Practicar la lógica de programación
 *             Practicar en el uso de arrow functions
 *             Reforzar el aprendizaje sobre arrays
 *
 *   Tarea: Números romanos y arábicos
 *          Se nos presenta un número formados por pares DL, siendo D un dígito numérico 0-9 y L una letra entre I,V,L,C,M
 *          El valor decimal de DL es D veces el valor romano de L. 
 *                Ejemplo: 5V = 5*5 = 25
 *          El valor del par se suma al del siguiente si L del primer par es mayor o igual al del siguiente par 
 *          o se resta en caso contrario.
 *                Ejemplo: 3C4X = 3*100+4*10 = 340 
 *                         4X3C = - 4 * 10 + 3 * 100 = 260
 * 
 *          Tenemos que transformar el número romano en decimal
 * 
 *   Entrada : Cadena de caracteres con formato DL donde D es un digito numérico 0-9 y L una letra entre I,V,L,C,M
 *             Ejemplo: 2I3I2X9V1X  = +2 -3 +20 -45 +10 = 29-45
 * 
 *   Salida  : -16       
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

const romanos=[
    {
        letra:"I",
        valor:1
    },
    {
        letra:"V",
        valor:5
    },
    {
        letra:"X",
        valor:10
    },
    {
        letra:"L",
        valor:50
    },
    {
        letra:"C",
        valor:100
    },
    {
        letra:"M",
        valor:1000
    }
]

// Comprobamos si la cadena de entrada está en el formado adecuado
// La cadena debe tener longitud mínima de 2
// Debe haber tantas letras como dígitos numéricos
// En las posiciones pares deben estar letras (solo I,V,L,C o M)
// En las posiciones impares deben estar digitos numericos (solo del 0 al 9)
function isValidData(cadena){
    const letras=cadena.split('').filter((el,i)=>i%2==1)
    const numeros=cadena.split('').filter((el,i)=>i%2==0)
   
    return cadena.length>=2 &&
           letras.length==numeros.length &&
           letras.every(el=>romanos.map(el=>el.letra).join('').includes(el)) &&
           numeros.every(el=>"0123456789".includes(el)) 
}

// Calculamos el valor de la cadena a decimal teniendo en cuenta
// que debemos sumar un par al siguiente si el primer par es mayor o igual al siguiente par
// y restarlo en caso contrario
function calcularValor(cadena){
    const letras=cadena.split('').filter((el,i)=>i%2==1)
    const numeros=cadena.split('').filter((el,i)=>i%2==0)

    const productos=numeros.map((el,i)=>parseInt(el)*romanos.find(romano=>romano.letra==letras[i]).valor)

    let resultado=0
    let i=0
    while(i<productos.length-1){
        resultado+=romanos.find(el=>el.letra==letras[i]).valor>=romanos.find(el=>el.letra==letras[i+1]).valor
                     ?productos[i]
                     :-productos[i]
        i+=1
    }
    return resultado+productos[i]
}

let cadena=solicitarDato("Cadena numérica romana: ","string")
while (!isValidData(cadena)){
    console.log("Error ! La cadena no tiene un formado correcto")
    cadena=solicitarDato("Cadena numérica romana: ","string")
}

console.log(calcularValor(cadena))



