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
 *             Ejemplo: 2I3I2X9V1X  +2 -3 +20 -45 +10
 *
 *   Salida  : -16       
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let cadena = solicitarDato("Introduce una cadena de caracteres en formato DL: ", "string");

const romanoDecimal = (cadena) => {
    const valorRomano = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    const arrSeparada = cadena.match(/(\d)([IVXLCDM])/g)
    
    let total = 0

    arrSeparada.forEach((par, index) => {
        let digito = parseInt(par[0], 10)
        let letraRomana = par[1]
        let valorActual = digito * valorRomano[letraRomana]

        if (index < arrSeparada.length - 1) {
            let siguienteValor = valorRomano[arrSeparada[index + 1][1]]

            total += (valorRomano[letraRomana] >= siguienteValor) ? valorActual : -valorActual
        } else {
            total += valorActual
        }
    });

    return total
};

console.log(romanoDecimal(cadena))



