const $d = document,
      $ol=$d.querySelector("#xhr")

let url ="https://jsonplaceholder.typicode.com/users"

fetch(url, {method:"GET"})
.then(respuesta=>respuesta.ok
                    ?respuesta.json()
                    :Promise.reject(respuesta))
.then(json=>{
    console.log(json)
    $ol.innerHTML=json.map(usuario=>`
        <li>${usuario.name} - ${usuario.address.city}</li>    
    `).join('') 
}) 
.catch(error=>{
    let statusText=error.statusText || "Algo fue mal !"
    console.log(`Error: ${error.status} ${ statusText}`)
})
 