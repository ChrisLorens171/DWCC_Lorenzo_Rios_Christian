import STRIPE_KEYS from "./stripe-keys.js"

const $d=document,
      $tacos=$d.querySelector("#tacos")

const fetchOptions={
    header:{
        Authorization:`Bearer ${STRIPE_KEYS.secret}`
    }
}

Promise.all([
    fetch("https://api.stripe.com/products",fetchOptions),
    fetch("https://api.stripe.com/prices",fetchOptions)
]).then(respuestas=> Promise.all(respuestas.map(resp=>resp.ok?resp.json():Promise.reject(resp))))