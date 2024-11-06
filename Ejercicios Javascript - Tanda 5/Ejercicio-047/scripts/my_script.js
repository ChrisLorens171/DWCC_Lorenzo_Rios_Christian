/***************************************************************************************************************
* 
*   Objetivo: Aprender a trabajar con diferentes estructuras de datos
*             Reforzar el aprendizaje en el uso de métodos de array
*
*   Tarea: Crear una lista de la compra con un array de objetos con la forma indicada
*
*                    {
*                       producto: cadena,
*                       precio: numero_entero,
                        cantidad: numero_entero
*                    }
*
*           Calcular la suma del importe de la lista de productos
*
*   Entrada : --
*
*
*   Salida  : La suma del importe de la lista de la compra
*
*
***************************************************************************************************************/

const carrito = [
    { producto: "escoba", precio: 12, cantidad: 2},
    { producto: "peluca", precio: 35, cantidad: 1},
    { producto: "botella", precio: 0.50, cantidad: 5},
    { producto: "yogur", precio: 2, cantidad: 50},
]

const sum = carrito.reduce((prev, actual) => prev + (actual.precio * actual.cantidad), 0)
let resultado = `El total de sus productos asciende a ${sum}`

console.log(resultado)

