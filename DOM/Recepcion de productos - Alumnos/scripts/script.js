const $d = document,
      $productos = $d.querySelector("#tableBody"),
      $anhadirProducto = $d.querySelector("#btnAdd"),
      $limpiar = $d.querySelector("#btnClear"),
      $nombre = $d.querySelector("#name"),
      $precio = $d.querySelector("#price"),
      $categoria = $d.querySelector("#category"),
      $estado = $d.querySelector("#condition"),
      $search = $d.querySelector("#search")

let editando = false
let idEditando = null

const productos = [
    { "name": "Samsung", "price": "200", "categoryId": "1", "conditionId": "1", "id": 1 },
    { "name": "LG", "price": "300", "categoryId": "2", "conditionId": "2", "id": 2 },
    { "name": "Motorola", "price": "350", "categoryId": "3", "conditionId": "3", "id": 3 }
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

function filtrarProductos() {
    const texto = $search.value.trim().toLowerCase()
    
    const productosFiltrados = productos.filter(el =>
        el.name.toLowerCase().includes(texto)
    )

    renderProductos(productosFiltrados)
}

function handleClickProductos(ev) {
    if (ev.target.classList.contains("fa-trash")) {
        // Eliminar producto
        let id = parseInt(ev.target.dataset.id)
        productos.splice(productos.findIndex(el => el.id === id), 1)
        renderProductos()
    } else if (ev.target.classList.contains("fa-edit")) {
        // Editar producto
        let id = parseInt(ev.target.dataset.id)
        let producto = productos.find(el => el.id === id)

        if (!producto) return

        editando = true
        idEditando = id

        $nombre.value = producto.name
        $precio.value = producto.price
        $categoria.value = producto.categoryId
        $estado.value = producto.conditionId

        $anhadirProducto.textContent = "Actualizar Producto"
        $limpiar.textContent = "Cancelar"
    }
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

function addOrUpdateProduct() {
    const name = $nombre.value.trim()
    const price = $precio.value.trim()
    const categoryId = $categoria.value
    const conditionId = $estado.value

    if (!name || !price || !categoryId || !conditionId) {
        alert("Todos los campos son obligatorios.")
        return
    }

    if (editando) {
        // Actualizar producto existente
        let producto = productos.find(p=>p.id==idEditando)
        if (producto) {
            producto.name = name
            producto.price = price
            producto.categoryId = categoryId
            producto.conditionId = conditionId
        }
    } else {
        // Agregar nuevo producto
        let newId = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1

        const newProduct = {
            id: newId,
            name,
            price,
            categoryId,
            conditionId
        }

        productos.push(newProduct)
    }

    renderProductos()
    resetForm()
}

$d.addEventListener("DOMContentLoaded", () => {
    renderCategorias()
    renderProductos(productos)
    renderEstado()

    
    $anhadirProducto.addEventListener("click", ev => {
        ev.preventDefault()
        addOrUpdateProduct()
    })
    
    $limpiar.addEventListener("click", ev => {
        ev.preventDefault()
        resetForm()
    })
    
    $productos.addEventListener("click", handleClickProductos)

    $search.addEventListener("input",ev=>{
        filtrarProductos()
    })
})
