/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear operadores aritméticos
 *             Reforzar en el uso de métodos del objeto Math
 *             Aprender a emplear métodos adicionales del objeto Math
 *             Aprender a definir y usar funciones declaradas (adicional)
 *             Aprender a definir y usar funciones expresadas (adicional)
 *             Mejorar en el aprendizaje de programación (adicional)
 *  
 *   Tarea: Cada vez más están ofreciendo cuentas corrientes remuneradas en los bancos. 
 *          Estas cuentas se rigen por la regla de interés compuesto:
 * 
 *               T=C*(1+r/n)^(nt)
 * 
 *         donde:
 * 
 *               T: La cantidad total al final de la inversión
 *               C: El capital inicial
 *               r: es el interés anual
 *               t: número de años que se invierte la cantidad
 *               n: número de veces que se cobran los intereses en el año (normalmente 12 en las cuentas corrientes remuneradas)        
 * 
 *          Solicitar los datos para poder calcular la cantidad total de la inversión 
 *          Mostrar un mensaje con el resultado
 *
 *   Entrada : T, C, r ,t, n
 *
 *   Salida  : Un mensaje indicando cual será la cantidad total al final de la inversión
 *
 *         1500 euros invertidos al 4.3% por 6 años cobrando intereses 4 veces al año hacen 1938.84 euros           
 * 
 *   Adicional: Crear una versión que funcione a la inversa: determinar la cantidad inicial que 
 *              deberíamos invertir para alcanzar un determinado objetivo final
 * 
 ***************************************************************************************************************/
import solicitarDato from "../../ValidarDatos.js"

let cantidad = solicitarDato("Cantidad Inicial", "integer")
let interes = solicitarDato("Interés anual", "integer")
let anhos = solicitarDato("Número de años", "integer")
let cuotas = solicitarDato("Número de cuotas", "integer")
let total
let mensaje

function calculoDinero (cantidad, interes, anhos, cuotas) {

    total = (cantidad * Math.pow((1.0 + (interes / 100) / cuotas),(cuotas * anhos)))

    mensaje = `${cantidad} euros invertidos al ${interes} %, por ${anhos} años cobrando intereses ${cuotas} veces al año hacen ${Math.round(total * 100) / 100} euros`

    return mensaje

}

function calculoInverso (interes, anhos, cuotas, total) {

    cantidad = (total / Math.pow((1.0 + (interes / 100) / cuotas),(cuotas * anhos)))

    mensaje = `Para obtener ${total} euros es necesario invertir ${Math.round(cantidad * 100) / 100} euros al ${interes} % por ${anhos} años cobrando intereses ${cuotas} veces al año`

    return mensaje
}

calculoDinero(cantidad, interes, anhos, cuotas)
console.log(mensaje)

total = prompt("Introduce la cantidad que quieres conseguir")
interes = prompt("Interés anual")
anhos = prompt("Número de años")
cuotas = prompt("Número de cuotas")

calculoInverso(interes, anhos, cuotas, total)
console.log(mensaje)


