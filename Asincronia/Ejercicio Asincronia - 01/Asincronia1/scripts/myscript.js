function cuadrado(num, callback) {
    setTimeout(()=>callback(num*num), 2000*Math.random())
}

cuadrado(1,(num)=>{
    console.log(`Cuadrado de 1: ${num}`)
    cuadrado(2,(num)=>{
        console.log(`Cuadrado de 2: ${num}`)
        cuadrado(3,(num)=>{
            console.log(`Cuadrado de 3: ${num}`)
            cuadrado(4,(num)=>{
                console.log(`Cuadrado de 4: ${num}`)
                cuadrado(5,(num)=>{
                    console.log(`Cuadrado de 5: ${num}`)
                    cuadrado(6,(num)=>{
                        console.log(`Cuadrado de 6: ${num}`)
                        console.log("Fin callback")
                    })
                })
            })
        })
    })
})

/* Con Promesas */

function cuadradoP(num) {
    return new Promise((resolve, reject)=>{
        if (num=="") {
            reject("No es un número")
        }
        setTimeout(()=>resolve(num*num), 2000*Math.random())
    })
}

cuadradoP(1)
.then((num)=>{
    console.log(`Cuadrado de 1: ${num}`)
    return cuadradoP(2)
 })
 .then((num)=>{
    console.log(`Cuadrado de 2: ${num}`)
    return cuadradoP(3)
 })
 .then((num)=>{
    console.log(`Cuadrado de 3: ${num}`)
    return cuadradoP(4)
 })
 .then((num)=>{
    console.log(`Cuadrado de 4: ${num}`)
    return cuadradoP(5)
 })
 .then((num)=>{
    console.log(`Cuadrado de 5: ${num}`)
    return cuadradoP(6)
 })
 .then((num)=>{
    console.log(`Cuadrado de 6: ${num}`)
 })
 .catch(()=>{
    console.log(num)
 })
 .finally(()=>{
    console.log("Fin Promesas")
 })



function cuadradoP(num) {
   return new Promise((resolve, reject) => {
       if (typeof num !== "number" || isNaN(num)) {
           reject("El argumento no es un número válido");
       }
       setTimeout(() => resolve(num * num), 2000 * Math.random());
   });
}

async function calcularCuadrados() {
    try {
        let resultado;

        resultado = await cuadradoP(1);
        console.log(`Cuadrado de 1: ${resultado}`);

        resultado = await cuadradoP(2);
        console.log(`Cuadrado de 2: ${resultado}`);

        resultado = await cuadradoP(3);
        console.log(`Cuadrado de 3: ${resultado}`);

        resultado = await cuadradoP(4);
        console.log(`Cuadrado de 4: ${resultado}`);

        resultado = await cuadradoP(5);
        console.log(`Cuadrado de 5: ${resultado}`);

        resultado = await cuadradoP(6);
        console.log(`Cuadrado de 6: ${resultado}`);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Fin async/await");
    }
}

calcularCuadrados();
