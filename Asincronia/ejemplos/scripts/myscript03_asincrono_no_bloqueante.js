console.log("Ejemplo de código asincrono no bloqueante")

function saludar2(msg) {
    setTimeout(()=>console.log(msg), 5000*Math.random())
}

function saludar1(msg) {
    setTimeout(()=>console.log(msg), 5000*Math.random())
    saludar2("Adios")
}

saludar1("Hola")

console.log("Terminamos saludos")