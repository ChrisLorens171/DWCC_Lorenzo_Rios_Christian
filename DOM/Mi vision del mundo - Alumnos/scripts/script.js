const $d = document,
        $panels = $d.querySelectorAll('.panel'),
        $container = $d.querySelector('.container')

const datos=[
    {
        id:1,
        url:"https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        titulo:"Explorar el Mundo"
    },
    {
        id:2,
        url:"https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        titulo:"Bosques Salvajes"
    },
    {
        id:3,
        url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        titulo:"Playas Soleadas"
    },
    {
        id:4,
        url:"https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        titulo:"La Ciudad en Invierno"
    },
    {
        id:5,
        url:"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        titulo:"Montañas y Nubes"
    }
]

/* Version 1 */

function ponerActive() {
    $panels.forEach(panel => {

        panel.addEventListener('click', () => {
            quitarActive()
            panel.classList.add('active')
        })
    
    })
}

function quitarActive() {
    $panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/* ponerActive() */

/* Version 2 */

/* function removeActiveClasses() {

    $panels.forEach(el => el.classList.remove('active'));

}

$container.addEventListener('click', ev => {
    if (ev.target.classList.contains('panel')) {

        removeActiveClasses();
        ev.target.classList.add('active');

    }
}); */

/* Version 3 */

$container.innerHTML=datos.reduce((anterior,actual)=>anterior+`
    <div class="panel">       
        <img src="${actual.url}" class="imagen-panel" alt="Foto de la comida">
        <h3>${actual.titulo}</h3>     
    </div>
`,'')




