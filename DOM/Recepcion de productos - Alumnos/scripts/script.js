const $d = document,
      $productos = $d.querySelector("#tableBody"),
      $anhadirProducto = $d.querySelector("#btnAdd"),
      $nombre = $d.querySelector("#name"),
      $precio = $d.querySelector("#price"),
      $categoria = $d.querySelector("#category"),
      $estado = $d.querySelector("#condition")

const productos = [
    {
      "name": "Samsung",
      "price": "200",
      "categoryId": "1",
      "conditionId": "1",
      "id": 1
    },
    {
      "name": "LG",
      "price": "300",
      "categoryId": "2",
      "conditionId": "2",
      "id": 2
    },
    {
      "name": "Motorola",
      "price": "350",
      "categoryId": "3",
      "conditionId": "3",
      "id": 3
    }
]

const categories = [
    { "name": "Teléfono", "id": "1" },
    { "name": "TV", "id": "2" },
    { "name": "Portátil", "id": "3" }
]

const conditions = [
    { "name": "Excelente", "id": "1" },
    { "name": "Bueno", "id": "2" },
    { "name": "Malo", "id": "3" }
]

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

function renderProductos() {
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
}

function addProduct() {
    const name = $nombre.value.trim()
    const price = $precio.value.trim()
    const categoryId = $categoria.value
    const conditionId = $estado.value

    if (!name || !price || !categoryId || !conditionId) {
        alert("Todos los campos son obligatorios.")
        return
    }

    const newProduct = {
        id: productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1,
        name,
        price,
        categoryId,
        conditionId
    }

    productos.push(newProduct)
    renderProductos()
    resetForm()
}

$d.addEventListener("DOMContentLoaded",ev=>{
    renderCategorias()
    renderProductos()
    renderEstado()
    
    $anhadirProducto.addEventListener("click", ev => {
        ev.preventDefault()
        addProduct()

        
    })
    
    $productos.addEventListener("click",ev=>{
        if(ev.target.classList.contains("fa-trash")) {
            console.log("Borro")
        } else {
            console.log("Edito")
        }
    })

})
