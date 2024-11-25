const $d=document,
    $productos=$d.querySelector("#lista-productos"),
    $bodyCarrito=$d.querySelector('#body-carrito'),
    $footercarrito=$d.querySelector('#footer-carrito')

const productos=[
    {
        "precio": 500,
        "id": 1,
        "title": "Café",
        "thumbnailUrl": "https://picsum.photos/id/0/600"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Pizza",
        "thumbnailUrl": "https://picsum.photos/id/10/600"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Agua",
        "thumbnailUrl": "https://picsum.photos/id/20/600"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Sandía",
        "thumbnailUrl": "https://picsum.photos/id/30/600"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mango",
        "thumbnailUrl": "https://picsum.photos/id/40/600"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Chela",
        "thumbnailUrl": "https://picsum.photos/id/50/600"
    }
]

const carrito=[]

function renderProductos1(productos) {

    /* $productos.innerHTML=productos.map(producto=>`
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
            <div class="card">
                <img src="${producto.thumbnailUrl}" class="card-img-top" alt="item-producto">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.precio} &euro;</p>
                    <a href="#" class="btn btn-dark">Comprar</a>
                </div>
            </div>
        </div>
    `).join('') */

    // Diferencia do anterior, en vez de un join, simplemente usas unha '' vacia e cambias a estructura a reduce
    $productos.innerHTML=productos.reduce((anterior,actual)=>anterior+`
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
            <div class="card">
                <img src="${actual.thumbnailUrl}" class="card-img-top" alt="item-producto">
                <div class="card-body">
                    <h5 class="card-title">${actual.title}</h5>
                    <p class="card-text">${actual.precio} &euro;</p>
                    <a href="#" class="btn btn-dark" data-producto-id="${actual.id}">Comprar</a>
                </div>
            </div>
        </div>
    `,'')
}

function renderProductos2(productos) {
    const $tProducto=$d.querySelector('#template-producto').content
    const $fragmento=$d.createDocumentFragment()

    productos.forEach(producto => {
        const $clon=$tProducto.cloneNode(true)
        const $img=$clon.querySelector("img")
        //$img.setAttribute(srx,producto.thumbnailUrl)
        $img.src=producto.thumbnailUrl
        const $title=$clon.querySelector(".card-title")
        $title.textContent=producto.title
        const $precio=$clon.querySelector("p")
        $precio.innerHTML=`${producto.precio}&euro;`
        const $btn=$clon.querySelector("a")
        $btn.dataset.productoId=producto.id
        $fragmento.appendChild($clon)
    });
    $productos.appendChild($fragmento)
}

function renderFooter(carrito) {
    
}

function renderCarrito(carrito) {
    $bodyCarrito.innerHTML=carrito.map((productoCarrito,i)=>
        `<tr>
        <td>${i+1}</td>
        <td>${productos.find(producto=>producto.id==productoCarrito.id).title}</td>
        <td>${productoCarrito.cantidad}</td>
        <td>
            <button class="btn btn-info btn-sm">
                +
            </button>
            <button class="btn btn-danger btn-sm">
                -
            </button>
        </td>
        <td>${productoCarrito.cantidad*productos.find(producto=>producto.id==productoCarrito.id).precio} &euro;</td>
      </tr>
      `).join('')

    renderFooter(carrito)
}

$productos.addEventListener("click",ev=>{
    ev.preventDefault()
    if (ev.target.dataset.productoId) {
        //console.log(`Has comprado el producto ${ev.target.dataset.productoId}`)
        const producto = carrito.find(producto=>producto.id==ev.target.dataset.productoId)
        if (producto) {
            producto.cantidad++
        } else {
            const producto={
                id:ev.target.dataset.productoId,
                cantidad:1
            }
            carrito.push(producto)    
        }
        console.log(carrito)
        renderCarrito(carrito)
    }
})

$d.addEventListener("DOMContentLoaded", ev=> {
    renderProductos1(productos)
})