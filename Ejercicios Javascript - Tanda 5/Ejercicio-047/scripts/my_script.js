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

const carrito=[
    {
        producto:"leche",
        precio:0.90,
        cantidad:5
    },
    {
        producto:"azucar",
        precio:1.1,
        cantidad:2
    },
    {
        producto:"café",
        precio:6.5,
        cantidad:1
    },
    {
        producto:"colacao",
        precio:4.35,
        cantidad:1
    }
]

function calcularPrecio(carro){
    return carro.reduce((anterior,actual)=>anterior+actual.precio*actual.cantidad,0).toFixed(2)
}

console.log(`El precio del carro de compra es: ${calcularPrecio(carrito)}`)