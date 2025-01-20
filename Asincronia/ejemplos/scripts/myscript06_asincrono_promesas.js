console.log("Ejemplo de código asincrono con promesas")

function saludar1(msg) {
    return new Promise((resolve, reject)=>{
        if (msg=="") {
            reject("Falta mensaje")
        }
        setTimeout(()=>resolve(msg), 5000*Math.random())
    })
}

function saludar2(msg) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(msg), 5000*Math.random())
    })
}

function saludar3(msg) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(msg), 5000*Math.random())
    })
}

saludar1("Hola")
 .then((msg)=>{
    console.log(msg)
    return saludar2("")
 })
 .then((msg)=>{
    console.log(msg)
    return saludar3("ReAdios")
 })
 .then((msg)=>{
    console.log(msg)
 })
 .catch((msg)=>{
    console.log(msg)
 })
 .finally(()=>{
    console.log("Terminamos saludos")
 })
