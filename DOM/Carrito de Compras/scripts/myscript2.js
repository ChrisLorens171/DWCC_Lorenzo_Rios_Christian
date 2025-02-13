const $d=document,
      $bodyCarrito=$d.querySelector("#body-carrito"),
      $footerCarrito=$d.querySelector("#footer-carrito"),
      $listaProductos=$d.querySelector("#lista-productos")

let urlProductos="http://localhost:3000/productos"
let urlCarritos="http://localhost:3000/carritos"

const productos=[],
      carrito=[]

function ajax(options) {
    const {url,method,fSucces,fError,data}=options

    fetch(url,{
        method: method || "GET",
        headers:{
            "Content-type":"application/json; charset=utf-8"
        },
        body:JSON.stringify(data)
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fSucces(json))
    .catch(error=>fError(error))
}

function renderFooterCarrito(carrito,total) {
    if(carrito.length) {
        $footerCarrito.innerHTML = `
            <th scope="row" colspan="2">Total productos</th>
                <td>${carrito.reduce((anterior,actual)=>anterior+actual.cantidad,0)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                        Vaciar Carrito
                    </button>
                </td>
            <td class="font-weight-bold"><span>${total}</span>&euro;</td>`
    } else {
        $footerCarrito.innerHTML=`<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
    }
}

$footerCarrito.addEventListener("click",ev=>{
    ev.preventDefault()
    ev.stopPropagation()
    ev.stopImmediatePropagation()

    if(ev.target.id=="vaciar-carrito"){
        // NO !!!!!!
        //carrito.map(el=>el.id).forEach(el=>deleteCarrito(el))
        Promise.all(carrito.map(el=>fetch(`${urlCarritos}/${el.id}`,{method:"DELETE"})))
        .then(resps=>Promise.all(resps.map(resp=>resp.ok?resp.json():Promise.reject(resp))))
        .then(jsons=>{
            carrito.splice(0,carrito.length)
            renderCarrito(carrito,productos)
        })
        .catch(errors=>console.log(errors))
    }
})

// En el caso de querer modificar solo 1 fila sin cambiar el resto usamos esto
/* function renderCarritoId(id) {
    const filas=$bodyCarrito.querySelector("tr")
    const fila=filas.find(fila=>fila.dataset.id==id)
} */
    
function renderCarrito(carrito,productos) {
    let total=0
    $bodyCarrito.innerHTML=carrito.reduce((anterior,actual,i)=>{
        const producto=productos.find(el=>el.id==actual.productoId)
        total+=actual.cantidad*producto.precio
        return anterior+`
        <tr data-id="${actual.id}">
            <td>${i+1}</td>
            <td>${producto.title}</td>
            <td>${actual.cantidad}</td>
            <td>
                <button class="btn btn-info btn-sm" data-id="${actual.id}">
                    +
                </button>
                <button class="btn btn-danger btn-sm" data-id="${actual.id}">
                    -
                </button>
            </td>
            <td>${actual.cantidad * producto.precio} &euro;</td>
        </tr>
        `
    },'')
    renderFooterCarrito(carrito,total)
}

function renderProductos(productos) {
    $listaProductos.innerHTML=productos.reduce((anterior,actual)=>anterior+`
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
            <div class="card">
                <img src="${actual.thumbnailUrl}" class="card-img-top" alt="item-producto">
                <div class="card-body">
                    <h5 class="card-title">${actual.title}</h5>
                    <p class="card-text">${actual.precio} &euro;</p>
                    <a href="#" class="btn btn-dark" data-id="${actual.id}">Comprar</a>
                </div>
            </div>
        </div>`,'')
}

function getData() {
    Promise.all([fetch(urlProductos),fetch(urlCarritos)])
    .then(resps=>Promise.all(resps.map(resp=>resp.ok?resp.json():Promise.reject(resp))))
    .then(([prods,cart])=>{
        //console.log(prods,cart)
        productos.splice(0,productos.length,...prods)
        carrito.splice(0,carrito.length,...cart)
        renderProductos(productos)
        renderCarrito(carrito,productos)
    })
    .catch(errors=>console.log(errors))
}

function addCarrito(productoId) {
    ajax({
        url: urlCarritos,
        method: "POST",
        fSucces:json=>{
            carrito.push(json)
            renderCarrito(carrito,productos)
        },
        fError:error=>console.log(error),
        data:{
            cantidad: 1,
            productoId
        }
    })
}

function deleteCarrito(id) {
    ajax({
        url:`${urlCarritos}/${id}`,
        method:"DELETE",
        fSuccess:json=>{
            carrito.splice(carrito.findIndex(el=>el.id==id),1)
            renderCarrito(carrito,productos)
        },
        fError:error=>console.log(error)
    })
}

function updateCarrito(productoCarrito,cantidad) {
    //console.log(productoCarrito)
    ajax({
        url:`${urlCarritos}/${productoCarrito.id}`,
        method:"PATCH",
        fSucces:json=>{
            productoCarrito.cantidad=json.cantidad
            if(productoCarrito.cantidad == 0) {
                deleteCarrito(productoCarrito.id)
            } else {
                renderCarrito(carrito,productos)
            }
        },
        fError:error=>console.log(error),
        data:{
            cantidad:productoCarrito.cantidad+cantidad
        }
    })
}

$bodyCarrito.addEventListener("click",ev=>{    
    let id=ev.target.dataset.id
    if(id) {
        const productoCarrito=carrito.find(el=>el.id==id)

        if(ev.target.dataset.id) {
            if(ev.target.classList.contains("btn-info")) {
                //Incrementar
                updateCarrito(productoCarrito,1)
            } else {
                //Decrementar
                updateCarrito(productoCarrito,-1)
            }
        }
    }
})

$listaProductos.addEventListener("click",ev=>{
    ev.preventDefault()

    let id = ev.target.dataset.id
    if(id) {
        let productoCarrito = carrito.find(el=>el.productoId==id)
        if(productoCarrito) {
            // Incrementar cantidad
            updateCarrito(productoCarrito,1)
        } else {
            // Añadir producto
            addCarrito(id)
        }
    }
})

$d.addEventListener("DOMContentLoaded",getData)