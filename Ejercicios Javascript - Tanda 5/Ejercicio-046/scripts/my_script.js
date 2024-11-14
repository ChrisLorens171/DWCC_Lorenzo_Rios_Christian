/***************************************************************************************************************
 *
 *   Objetivo: Aprender a definir arrays de objetos
 *             Reforzar en el uso de programación funcional
 *             Mejorar en el testeo de aplicaciones
 *
 *   Tarea: Almacenar los siguientes datos en una estructura que nos facilite operar con ellos:
 * 
 *          Nombre      Apellidos           Puesto                      Fecha Contratación
 *          --------------------------------------------------------------------------------
 *           Juan       Alonso Pérez        Gestor                          2016-12-31
 *           Xian       Xuong               Ingeniero de Software           2016-10-05
 *           Ana        Rodriguez Sánchez   Programadora 
 *           Jose       Vega Leirós         Desarrollador web
 *           Marta      Martínez López      Administrador de BD             2015-12-18
 * 
 *          Crea un script con funciones que nos permitan:
 * 
 *            - Filtrar los datos por nombre, apellidos o puesto según la cadena de texto que pasemos
 *            - Ordene los datos según el campo que pasemos (nombre, apellidos, etc) y el criterio de 
 *              ordenación (asc,des)
 *            - Filtre los datos según el número de años que llevan contratados
 *
 *   Salida  : Llama a las funciones creadas con diferentes criterios
 *
 ***************************************************************************************************************/

const EMPLEADOS = [
    {nombre: "Juan", apellidos: "Alonso Perez", puesto: "Gestor", fechaC: new Date("2016-12-31")},
    {nombre: "Xian", apellidos: "Xuong", puesto: "Ingeniero de Software", fechaC: new Date("2016-10-05")},
    {nombre: "Ana", apellidos: "Rodriguez Sánchez", puesto: "Programadora", fechaC: new Date("")},
    {nombre: "Jose", apellidos: "Vega Leirós", puesto: "Desarrollador web", fechaC: new Date("")},
    {nombre: "Marta", apellidos: "Martínez López", puesto: "Administrador de BD", fechaC: new Date("2015-12-18")}
]

function filtroEmpleados(empleados, propiedad, valor) { 
    empleados.filter(el => el[propiedad].toLowerCase().includes(valor.toLowerCase()))
}

console.log(filtroEmpleados(EMPLEADOS, "apellidos", "martínez"));