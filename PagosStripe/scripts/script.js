import STRIPE_KEYS from "./stripe-keys.js"

const $d=document,
      $tacos=$d.querySelector("#tacos")

const fetchOptions={
    headers:{
        Authorization:`Bearer ${STRIPE_KEYS.secret}`
    }
}

Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
.then(respuestas=> Promise.all(respuestas.map(resp=>resp.ok?resp.json():Promise.reject(resp))))
.then(json=>{
    //console.log(json)
    let products=json[0].data
    let prices=json[1].data
    
    $tacos.innerHTML=products.reduce((anterior,actual)=>{
        let price = prices.find(el=>el.id==actual.default_price)
        return anterior+`
            <figure class="taco" data-price="${price.id}">
                <img src="${actual.images[0]}" alt="${actual.name}">
                <figcaption>
                ${actual.name}
                <br/>
                ${price.unit_amount/100} ${price.currency}
                </figcaption>
            </figure> `
    },'')
})
.catch(error=>console.log(error))

$d.addEventListener("click",ev=>{
    if(ev.target.matches(".taco *")) {
        let priceId=ev.target.parentElement.dataset.price
        //console.log(priceId)
        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems:[{
                price:priceId,
                quantity:1
            }],
            mode:"subscription",
            successUrl:"http://127.0.0.1:5500/DWCC_Lorenzo_Rios_Christian/PagosStripe/assets/stripe-succes.html",
            cancelUrl:"http://127.0.0.1:5500/DWCC_Lorenzo_Rios_Christian/PagosStripe/assets/stripe-cancel.html"
        })
        .then(resp=>{
            if(resp.error) {
                $tacos.insertAdjacentHTML("afterend",resp.error.message)
            }
        })
    }
})