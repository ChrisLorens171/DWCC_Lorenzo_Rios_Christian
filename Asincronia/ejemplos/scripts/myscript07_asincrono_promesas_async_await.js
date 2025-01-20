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

async function saludar() {
    try {
        let resultado1=await saludar1("Hola")
        console.log(resultado1)
        let resultado2=await saludar2("Adios")
        console.log(resultado2)
        let resultado3=await saludar3("ReAdios")
        console.log(resultado3)
        console.log("Terminanos los saludos")

    } catch (error) {
        console.log(error)
    }    
}

saludar()