const $d=document,
    $ul=$d.querySelector("ul"),
    $input=$d.querySelector("input[type='text']"),
    $btnAdd=$d.querySelector("button"),
    $ocultar=$d.querySelector("#ocultar"),
    $form=$d.querySelector("form")

let libros=JSON.parse(sessionStorage.getItem("libros")) || [["Eloquent JavaScript","Scope & Closures","Understanding ECMAScript 6","Beginning Node.js","Web development with Node & Express"]]

/* Ejemplo Corto */
function renderLibros(libros) {
    $ul.innerHTML=libros.map(libro,i=>`
        <li>
            <span class="titulo">${libro}</span>
            <span class="borrar" data.id=${i}>-</span>
        </li>`).join('')
}

$btnAdd.addEventListener("click",ev=>{
    ev.preventdefault()

    /* if ($input[1].value!=""){
        $ul.innerHTML+=
        `<li>
            <span class="titulo">${$input[1].value}</span>
            <span class="borrar">-</span>
        </li>`
    } */

    $input[1].value=""
    sessionStorage.setItem("libros".stringify(libros))
    renderLibros(libros)
})

$ul.addEventListener("click",ev=>{
    if(ev.target.classList.contains("borrar")) {
        const $li = ev.target.parentElement
        //$ul.removeChild($li)
        libros.splice(libros.indexOf($li.firstElementChild.textContent),1)
        sessionStorage.setItem("libros",JSON.stringify(libros))
        renderLibros(libros)
    }
})

$input[0].addEventListener("keyup",ev=>{
    /* let textoBuscar=ev.target.value.toLowerCase()
    $li=$d.querySelectorAll("li")
    Array.from($lis).forEach($li=>{
        const titulo = $li.firstElementChild.textContent
        titulo.toLowerCase().indexOf(textoBuscar) != -1
        ?$li.style.display="block"
        :$li.style.display="none"
    }) */
    
    let textoBuscar=ev.target.value.toLowerCase()
    renderLibros(libros.filter(libro=>libro.includes(textoBuscar.toLowerCase())))
})

$ocultar.addEventListener("click",ev=> {
    ev.target.checked?$ul.style.display="none"
    :$ul.style.display="block"
})

$form.addEventListener("submit",ev=>{
    ev.preventDefault()
})

$d.addEventListener("DOMContentLoaded"), e=> {
    sessionStorage.getItem("libros")
    let libros=["Eloquent JavaScript","Scope & Closures","Understanding ECMAScript 6","Beginning Node.js","Web development with Node & Express"]
    
    renderLibros(libros)
}

/* Ejemplo Mediano */
    
    /* let innerUl = "" 
    innerUl += `<li>
        <span class="titulo">${libro[i]}</span>
        <span class="borrar">-</span>
    <li>`
    
    $ul.innerHTML=innerUl */

/* Ejemplo largo */

/* for(let i = 0; i < libros.length; i++) {
    let $li = $d.createElement("li")

    let $span1=$d.createElement("span")
    $span1.classList.add("titulo")
    $span1.textContent=libros[i]

    let $span2=$d.createElement("span")
    $span2.classList.add("titulo")
    $span2.textContent=libros[i]

    $li.append($span1, $span2)

    $ul.appendChild($li)
} */


