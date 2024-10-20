/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *             Aprender a mejorar la forma de resolver un problema una vez ya fue resuelto
 *
 *   Tarea: Solicitar el número de segundos que estamos confinados por una pandemia
 *
 *   Entrada : número entero positivo: segundos
 *
 *   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

const n = solicitarDato("Introduce el numero de segundos que estuvimos confinados: ", "integer")

function calcularTiempo(segundos) {
    const semanas = Math.floor(segundos / 604800);
    segundos %= 604800;
    const dias = Math.floor(segundos / 86400);
    segundos %= 86400;
    const horas = Math.floor(segundos / 3600);
    segundos %= 3600;
    const minutos = Math.floor(segundos / 60);
    segundos %= 60;
  
    return `Hemos estado confinados ${semanas} semanas, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
  }
  
  console.log(calcularTiempo(n));
  