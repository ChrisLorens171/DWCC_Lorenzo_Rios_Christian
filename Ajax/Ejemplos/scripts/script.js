const $d=document,
     $tbody=$d.querySelector("tbody"),
     $cards=$d.querySelector(".cards"),
     $totalPrice=$d.querySelector(".submenu").querySelector("span"),
     $vaciarBtn=$d.querySelector("#vaciar-carrito")

const cursos=[]

function ajax(options){
    const {url,method,fExito,fError,data}=options

    fetch(url,{
        method:method || "GET",
        headers: {
            "Content-type":"application/json; charset=utf-8"
        },
        body:JSON.stringify(data)    
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fExito(json))
    .catch(error=>fError({
        status:error.status,
        statusText:error.statusText||"Algo salió mal !"
    }))
}

function renderCursos(cursos) {
    $cards.innerHTML=cursos.reduce((anterior,actual)=>anterior+`
    <div class="card">
        <img src="${actual.src}" class="imagen-curso u-full-width" alt="${actual.src}" />
        <div class="info-card">
          <h4>${actual.title}</h4>
          <p>${actual.teacher}</p>
          <img src="assets/img/estrellas.png" />
          <p class="precio">
            ${actual.oldPrice} &euro;<span class="u-pull-right"
              >${actual.newPrice} &euro;</span
            >
          </p>
          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-curso-id="${actual.id}">Agregar al Carrito</a>
        </div>
    </div>
    `,'')
}

function renderCarrito(carritos) {
    //console.log(carritos)
    let totalPrice=carritos.reduce((anterior,actual)=>{
        let newPrice=cursos.find(curso=>curso.id==actual.cursoId).newPrice
        console.log(newPrice,actual.cantidad)
        return anterior+newPrice*actual.cantidad
    },0)
    $totalPrice.innerHTML=`${totalPrice} &euro;` 
}

function getCursos(){
    ajax({
        url:"http://localhost:3000/cursos",
        fExito:json=>{
            cursos.splice(0,cursos.length,...json)
            renderCursos(cursos)
            ajax({
                url:"http://localhost:3000/carritos",
                fExito:(json)=>renderCarrito(json),
                fError:error=>console.log(error)
            })
        },
        fError:error=>console.log(error)

    })
}

$cards.addEventListener("click",ev=>{
    ev.preventDefault()

    let cursoId=ev.target.dataset.cursoId
    if(cursoId) {
        console.log(cursoId)

    }
})

$d.addEventListener("DOMContentLoaded",getCursos)
