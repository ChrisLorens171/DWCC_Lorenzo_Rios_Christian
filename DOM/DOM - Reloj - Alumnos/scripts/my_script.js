const $d = document,
    $hora = $d.querySelector("#hora"),
    $minuto = $d.querySelector("#minuto"),
    $segundo = $d.querySelector("#segundo")
    
let segundos = 55
let minutos = 59
let horas = 23

setInterval(function(){
    $hora.innerHTML = (horas<10) ? "0" + horas : horas
    $minuto.innerHTML = (minutos<10) ? "0" + minutos : minutos
    $segundo.innerHTML = (segundos<10) ? "0" + segundos : segundos

    if (segundos == 59) {
        segundos = -1
        minutos++

    if(minutos == 60) {
        minutos = 0
        horas++
    } 

    if(horas == 24) {
        horas = 0
    }

    }
    segundos++
},1000) 