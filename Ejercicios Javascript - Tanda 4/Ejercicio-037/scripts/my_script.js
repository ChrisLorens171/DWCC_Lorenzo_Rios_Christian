/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso del objeto Date
 *
 *   Tarea: Solicitar dos fechas en formato dd/mm/aaaa 
 *          Indicar los días transcurridos entre las dos fechas
 *
 *   Entrada : 31/01/2013 02/02/2013
 *
 *   Salida  : 2 días
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let fechaInicio = solicitarDato("Introduce una fecha en formato dd/mm/aaaa; ", "string")
let fechaFin = solicitarDato("Introduce otra fecha en formato dd/mm/aaaa; ", "string")

// Función para calcular los días entre dos fechas
let calcularDiasEntreFechas = (fecha1, fecha2) => {

    // De las fechas introducidas creamos un array y posteriormente convertimos todos los elementos del array en Numbers
    let [dia1, mes1, anho1] = fecha1.split('/').map(Number);
    let [dia2, mes2, anho2] = fecha2.split('/').map(Number);
  
    // Creamos los objetos Date
    let fechaInicio = new Date(anho1, mes1 - 1, dia1);
    let fechaFin = new Date(anho2, mes2 - 1, dia2);

    // Al restar las fechas nos devuelve la diferencia en milisegundos
    let diferenciaEnMilisegundos = fechaFin - fechaInicio;
  
    // Convertimos los milisegundos en dias con el siguiente cálculo
    let diasTranscurridos = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
  
    return diasTranscurridos;
  };


  let dias = calcularDiasEntreFechas(fechaInicio, fechaFin);
  console.log(`${dias} días`);
  