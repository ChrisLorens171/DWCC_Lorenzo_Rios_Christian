const $d=document,
     $carrito=$d.querySelector("tbody"),
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

function renderCarritos(carritos) {
    console.log(carritos)
    let totalPrice=carritos.reduce((anterior,actual)=>{
        let newPrice=cursos.find(curso=>curso.id==actual.cursoId).newPrice
        return anterior+newPrice*actual.cantidad
    },0)
    $totalPrice.innerHTML=`${totalPrice} &euro;`

    $carrito.innerHTML=carritos.map(el=>`
        <tr>
            <td><img src="${el.curso.src}" class="imagen-curso u-full-width" /></td>
            <td>${el.curso.title}</td>
            <td>${el.curso.newPrice}</td>
            <td>${el.cantidad}</td>
            <td><i class="fa fa-trash" data-id="${el.id}"></i></td>
        </tr>`).join('')

    carritos.length 
        ?$vaciarBtn.style.display="block"
        :$vaciarBtn.style.display="none"
    
}

$vaciarBtn.addEventListener("click",ev=>{
    ev.preventDefault()
    //let idBorrar=Array.from($carrito.querySelectorAll("i")).map(el=>el.dataset.id)
    Promise.all(
    Array.from($carrito.querySelectorAll("i"))
    .map(el=>fetch(`http://localhost:3000/carritos/${el.dataset.id}`,{
        method:"DELETE"
    })))
    .then(respuestas=>respuestas
        .every(resp=>resp.ok)
        ?respuestas.map(resp=>resp.json())
        :respuestas.map(resp=>Promise.reject(resp)))

    .then(jsons=>getCursos())
    .catch(errors=>console.log(errors))
    
})

function getCursos(){
    ajax({
        url:"http://localhost:3000/cursos",
        fExito:json=>{
            cursos.splice(0,cursos.length,...json)
            renderCursos(cursos)
            ajax({
                url:"http://localhost:3000/carritos?_embed=curso",
                fExito:(json)=>renderCarritos(json),
                fError:error=>console.log(error)
            })
        },
        fError:error=>console.log(error)

    })
}

$carrito.addEventListener("click",ev=>{
    let id=ev.target.dataset.id
    console.log(id)
    if (id) {
        ajax({
            url:`http://localhost:3000/carritos/${id}`,
            method:"DELETE",
            fExito:(json)=>{
                getCursos()
            },
            fError:(error)=>console.log(error)
        })
    }
})

function addCarritoCurso(cursoId) {
    ajax({
        url:"http://localhost:3000/carritos",
        method: "POST",
        fExito:json=>{
            getCursos()
        },
        fError:error=>console.log(error),
        data:{
            cursoId,
            cantidad:"1",
            usuarioId:"1"
        }
    })
}

function updateCarritoCurso(cursoCarrito) {
    //console.log(cursoCarrito)
    ajax({
        url:`http://localhost:3000/carritos/${cursoCarrito.id}`,
        method:"PATCH",
        fExito:json=>{
            getCursos()
        },
        fError:error=>console.log(error),
        data:{
            cantidad:parseInt(cursoCarrito.cantidad)+parseInt(1),
        }
    })
}

$cards.addEventListener("click",ev=>{
    ev.preventDefault()

    let cursoId=ev.target.dataset.cursoId
    if(cursoId) {
        //console.log(cursoId)
        ajax({
            url:`http://localhost:3000/carritos?cursoId=${cursoId}`,
            fExito:(json)=>{
                if(json.length) {
                    // Actualizar cantidad
                    updateCarritoCurso(json[0])
                } else {
                    // Añadir curso
                    addCarritoCurso(cursoId)
                }
            },
            fError:error=>console.log(error)
        })
    }
})

$d.addEventListener("DOMContentLoaded",getCursos)
