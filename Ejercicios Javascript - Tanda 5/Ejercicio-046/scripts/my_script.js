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

import solicitarDato from "../../validarDatos.js"

const trabajadores=[
    {
        nombre:"Juan",
        apellidos:"Alonso Pérez",
        puesto:"Gestor",
        fecha:"2023-11-12"
    },
    {
        nombre:"Xian",
        apellidos:"Xuong",
        puesto:"Ingeniero de Software",
        fecha:"2023-11-11"
    },
    {
        nombre:"Ana",
        apellidos:"Rodriguez Sánchez",
        puesto:"Programadora",
        fecha:null
    },
    {
        nombre:"Jose",
        apellidos:"Vaga Leirós",
        puesto:"Desarrollador web",
        fecha:null
    },
    {
        nombre:"Marta",
        apellidos:"Martínez López",
        puesto:"Administrador de BD",
        fecha:"2023-11-09"
    },
]

function searchWorkers(workers,campo,cadena){
    return campo!="fecha"
                ?workers.filter(worker=>worker[campo].toLowerCase().includes(cadena.toLowerCase()))
                :typeof cadena == "string"
                    ?workers.filter(worker=>worker[campo]!=null&&worker[campo].toLowerCase().includes(cadena.toLowerCase()))
                    :workers.filter(worker=>worker[campo]==cadena)
}

// Filtra los empleados que por lo menos han trabajado en la empresa una serie de años
function searchWorkersByYears(years=1){
        const today=new Date()

        const year=today.getFullYear()
        const month=today.getMonth()
        const day=today.getDate()
        
        return trabajadores.filter(el=>{
            if (el.fecha!=null) {
                const [anho,mes,dia]=el.fecha.split("-")
                let diferencia=year-parseInt(anho)
                if (parseInt(mes)-1>month) {
                    diferencia--

                } else {
                    if (parseInt(mes)-1==month) {
                        if (parseInt(dia)>day) {
                            diferencia--
                        }
                    }
                }
                if (diferencia>=years)
                    return true
            }
            return false
        })
}

function sortWorkers(workers,campo,criterio="asc"){
    const workersCopy=[...workers]
    workersCopy.sort((worker1,worker2)=>worker1[campo]!=null&&worker1[campo].localeCompare(worker2[campo]))   
    return criterio=="asc"?workersCopy:workersCopy.reverse()
}


console.log(sortWorkers(trabajadores,"puesto"))
//console.log(sortWorkers(trabajadores,"puesto","desc"))
//console.log(sortWorkers(trabajadores,"fecha","desc"))
//console.log(searchWorkers(trabajadores,"puesto","do"))
//console.log(searchWorkers(trabajadores,"fecha",null))
//console.log(searchWorkers(trabajadores,"fecha","16"))
//console.log(searchWorkersByYears())


