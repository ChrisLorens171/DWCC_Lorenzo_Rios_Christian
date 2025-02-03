const usuarios=[
      {
        "nombre": "Juan",
        "apellidos": "Sanchez Rey",
        "nif": "11111111-A",
        "email": "juan@gmail.com"
      },
      {
        "nombre": "Ana",
        "apellidos": "Pérez Martínez",
        "nif": "22222222-B",
        "email": "ana@hotmail.com"
      },
      {
        "nombre": "Rosa",
        "apellidos": "Martínez Rodríguez",
        "nif": "33333333-C",
        "email": "rosa.martinez@microsoft.com"
      },
      {
        "nombre": "Jose",
        "apellidos": "Táboas Lérez",
        "nif": "44444444-D",
        "email": "jose@marca.es"
      },
      {
        "nombre": "Eva",
        "apellidos": "Vega Leirós",
        "nif": "55555555-E",
        "email": "evavl@gmail.com"
      }
]

const capitalize=(cadena)=>cadena.toLowerCase().split(' ').map(el=>el.trim()).filter(el=>el!="").map(el=>el[0].toUpperCase()+el.slice(1)).join(' ')
const ascSort=(vect,campo)=> vect.sort((u1,u2)=>u1[campo].localeCompare(u2[campo]))
const descSort=(vect,campo)=> ascSort(vect,campo).reverse()


