console.log("Ejemplo de código asincrono con callback")

function saludar2(msg,callback) {
    setTimeout(()=>callback(msg), 5000*Math.random())
}

function saludar1(msg, callback) {
    setTimeout(()=>callback(msg), 5000*Math.random())
    saludar2("Adios")
}

saludar1("Hola",(msg)=>{
    console.log(msg)
    saludar2("Adios",(msg)=>{
        console.log(msg)
        console.log("Terminamos saludos")
    })
})
