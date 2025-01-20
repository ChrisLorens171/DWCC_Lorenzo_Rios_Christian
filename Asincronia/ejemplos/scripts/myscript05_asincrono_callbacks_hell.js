console.log("Ejemplo de código asincrono con callback hell")

function saludar3(msg,callback) {
    setTimeout(()=>callback(msg), 5000*Math.random())
}

function saludar2(msg,callback) {
    setTimeout(()=>callback(msg), 5000*Math.random())
}

function saludar1(msg, callback) {
    setTimeout(()=>callback(msg), 5000*Math.random())
}

saludar1("Hola",(msg)=>{
    console.log(msg)
    saludar2("Adios",(msg)=>{
        console.log(msg)
        saludar3("ReSaludos",(msg)=>{
            console.log(msg)
            console.log("Terminamos saludos")
        })
    })
})
