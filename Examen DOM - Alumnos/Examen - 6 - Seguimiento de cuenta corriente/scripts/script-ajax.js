const $d=document,
      $balance=$d.querySelector("#balance"),
      $moneyPlus=$d.querySelector("#money-plus"),
      $moneyMinus=$d.querySelector("#money-minus"),
      $historial=$d.querySelector("#list"),
      $form=$d.querySelector("form"),
      $cantidad=$form.querySelector("#amount"),
      $concepto=$form.querySelector("#text")

function ajax(options) {
    const {url,method,fExito,fError,datos} = options

    fetch(url,{
        method:method || "GET",
        headers:{
            "Content-type":"application/json charset=utf-8;"
        },
        body:JSON.stringify(datos)
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fExito(json))
    .catch(error=>fError(error))
}

function getHistorial(url) {
    ajax({
        url,
        fExito:movimientos=>console.log(movimientos),
        fError:error=>console.log("Error")
    })
}

$d.addEventListener("DOMContentLoaded",ev=>{
    let url = "http://localhost:3000/movimientos"
    getHistorial(url)
})


