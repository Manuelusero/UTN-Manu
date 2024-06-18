/* DOM = document object model = modelo objeto del documento */
//Document es una variable global que se crea al abrir la pagina
/* console.log(document) */
console.dir(document)

//Obtiene un elemento por id, si lo encuentra lo retorna (como objeto), sino, retorna null
const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)


titulo.innerText = 'Hola' 


const cajaProducto = document.getElementById('caja-producto')
console.dir(cajaProducto)

//SI USAMOS COMILLAS INVERTIDAS PODEMOS HACER SALTOS DE LINEA.

cajaProducto.innerHTML = `
    <h2>Soy un subtitulo</h2>
    <p>Tv muy linda</p>
    <span>Precio: <b>$500</b></span>
`
/* 
const usuario = {
    nombre
    apellido,
    direccion,
    edad
}

const usuario = {
    nombre: 'Manuel',
    apellido: 'Usero',
    direccion: 'Monteagudo 2626',
    edad: '29'
}

Mostarlo dentro de un div 

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}
*/

// const Infousuario = document.getElementById('usuario')

// usuario.innerHTML = `
// <h2>Nombre Completo: ${usuario.nombre}${usuario.apellido}</h2>
// <span> Edad: ${usuario.edad}</span>
// <span> Direccion: ${usuario.direccion}</span>
// `

const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 500,
        id: 1,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'tv samsung 42"',
        precio: 1500,
        id: 2,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'tv samsung 52"',
        precio: 2500,
        id: 3,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
]
const productosHTML = document.getElementById('productos')


let plantillaProductos = ''
for(const producto of productos ){
    plantillaProductos = plantillaProductos + `
    <div>
        <h2>${producto.nombre}</h2>
        <img width='200px' src="${producto.thumbnail}"/>
        <span>Precio: ${producto.precio}</span>
        <p>${producto.descripcion}</p>
        <button>Comprar</button>
    </div>
    <hr>
    `
}

productosHTML.innerHTML = plantillaProductos