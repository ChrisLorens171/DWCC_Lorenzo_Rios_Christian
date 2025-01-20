console.log("Ejemplo de código sincrono bloqueante")
function saludar2(msg) {
    console.log(msg)
}

function saludar1(msg) {
    console.log(msg)
    saludar2("Adios")
    console.log("ReAdios")
}

saludar1("Hola")
console.log("Terminamos saludos")