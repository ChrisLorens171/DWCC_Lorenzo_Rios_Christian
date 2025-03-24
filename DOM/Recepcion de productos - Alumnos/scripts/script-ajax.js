const $d = document,
      $productos = $d.querySelector("#tableBody"),
      $anhadirProducto = $d.querySelector("#btnAdd"),
      $limpiar = $d.querySelector("#btnClear"),
      $nombre = $d.querySelector("#name"),
      $precio = $d.querySelector("#price"),
      $categoria = $d.querySelector("#category"),
      $estado = $d.querySelector("#condition"),
      $search = $d.querySelector("#search")

let urlProductos = "http://localhost:3000/productos"
let urlCategories = "http://localhost:3000/categories"
let urlConditions = "http://localhost:3000/conditions"


let idEditando = null
let editando = null

const productos = [],
      categories = [],
      conditions = []

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

function renderCategorias() {
    $categoria.innerHTML = categories.map(el => 
        `<option value="${el.id}">${el.name}</option>`
    ).join('')
}

function renderEstado() {
    $estado.innerHTML = conditions.map(el => 
        `<option value="${el.id}">${el.name}</option>`
    ).join('')
}

function renderProductos(productos) {
    $productos.innerHTML = productos.map(el => {
        let categoria = categories.find(e => e.id == el.categoryId).name
        let condition = conditions.find(e => e.id == el.conditionId).name

        return `<tr>
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>${categoria}</td>
            <td class="${condition}">${condition}</td>
            <td>
                <i class="fa fa-edit" data-id="${el.id}"></i>
                <i class="fa fa-trash" data-id="${el.id}"></i>
            </td>
        </tr>`
    }).join('')
}

function resetForm() {
    $nombre.value = ""
    $precio.value = ""
    $categoria.selectedIndex = 0
    $estado.selectedIndex = 0
    editando = false
    idEditando = null

    $anhadirProducto.textContent = "Añadir Producto"
    $limpiar.textContent = "Limpiar Formulario"
}

function getData() {
    Promise.all([fetch(urlProductos),fetch(urlCategories),fetch(urlConditions)])
    .then(resps=>Promise.all(resps.map(resp=>resp.ok?resp.json():Promise.reject(resp))))
    .then(([prods,categ,cond])=>{
        console.log(prods,categ,cond)
        productos.splice(0,productos.length,...prods)
        categories.splice(0,categories.length,...categ)
        conditions.splice(0,conditions.length,...cond)
        renderProductos(productos)
        renderCategorias()
        renderEstado()
    })
    .catch(errors=>console.log(errors))
}

$d.addEventListener("DOMContentLoaded",getData)
