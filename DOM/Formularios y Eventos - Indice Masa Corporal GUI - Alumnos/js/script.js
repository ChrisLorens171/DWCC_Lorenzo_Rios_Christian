const $d = document,
    $formulario = $d.getElementById('formulario'),
    $altura = $d.getElementById('altura'),
    $peso = $d.getElementById('peso'),
    $resultados = $d.querySelector('#resultados')

$formulario.addEventListener('submit', ev => {
    ev.preventDefault();

    let altura = parseFloat($altura.value)/100
    let peso = parseFloat($peso.value)

    // Comprobamos que los valores sean válidos
    if (isNaN(altura)) {
        $resultados.innerHTML = 
        `<p>Introduce una altura valida</p>`
        console.log($altura)
    } else if (isNaN(peso)) {
        $resultados.innerHTML = 
        `<p>Introduce un peso valido</p>`
    } else {      
        // Calculamos el IMC
        const imc = peso / (altura * altura)
    
        // Mostramos el IMC en el artículo de resultados
        $resultados.innerHTML = `
            <p>Tu IMC es: ${imc.toFixed(2)}</p>
        `
    }
})





