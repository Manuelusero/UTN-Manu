//arrays SIEMPRE CON CONST IGUAL QUE LOS OBJETOS Y FUNCIONES
//lista de elementos ordenados


let nombre1 = 'pepe'
let nombre2 = 'juan'
let nombre3 = 'ezequiel'


//posicion/index    0        1         2
const nombres = [ 'pepe', 'juan', 'ezequiel']


console.log(nombres[1])
console.log('Tengo' + nombres.length + 'nombres')

//array.length (propiedad)


//METODOS DE ARRAY

//.push(): agrega un elemento al final del array y devuelve la nueva longitud

/* nombres.push('maria) */

//unshift(): agrega un elemento al principio del array y devuelve la nueva longitud

/*nombres.unshift('maria')

console.log(nombres)

let nombre = 'pepe'
nombre = nombre.toUpperCase()

console.log(nombre) */


//pop() elimina el ultimo elemento y lo retorna

/*let ultimoElemento = nombres.pop()
console.log(ultimoElemento) */

//.shift() elimina el primer elemento y lo retorna

//SOLAMENTE FUNCIONA BIEN CON LOS ARRAYS DE STRING
//.indexOf() devuelve la posicion de un string en el array de strings

let posicionDeJuan = nombres.indexOf('juan')
console.log('La posicion de Juan es' + posicionDeJuan)

//.splice()

/*
array.splice()

1er paramentro:
- Desde donde va a posicionarse
2do parametro:
-Cantidad de elementos que se quieren borrar
3er paramentro:
-Elementros a agregar
*/

/* nombres.splice( posicionDeJuan, 1 ) */



/*const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias']

let posicionDeEzequiel = nombres2.indexOf('ezequiel')

const listaDeEliminados = nombre2.splice(posicionDeEzequiel, 0, 'lucas')

console.log(nombres2)
console.log('La lista de eliminados es: ', listaDeEliminados) */


// console.log ('la posicion de ezequiel es ' + posicionDeEzequiel)


//EJERCICIO

// const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']
//Eliminar a leonel
//eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril

//REGLAS:
//-No se puede mirar el array
//-Si van a poder usar consola



// let posicionLeonel = nombres3.indexOf('leonel')
// nombres3.splice (posicionLeonel,1)

// let posicionLucas = nombres3.indexOf('lucas')
// nombres3.splice ((posicionLucas - 1),1)

// let posicionAbril = nombres3.indexOf('abril')
// nombres3.splice (posicionAbril,0,'sofia')

// console.log(nombres3)

const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']


//RECORRER UN ARRAY 
/* for(let index = 0; index < nombres3.length; index = index + 1){
    console.log(nombres3[index])
}

//string.length => obteber la cantidad de caracteres de un string

/*
Obtener cantidad total de caracters de una lista de nombres:
Quiero que dado el array de nombres. por cada nombre sumes la cantidad de caracteres
Al finalizar el recorrido decir 'la cantidad de caracteres es: {sumatoria de caracteres}'


Ejemplo: ['pepe', 'juan'] // la sumatoria de caracteres es 8 

*/

/*let sumarCaracteres = 0;

for (let index = 0; index < nombres3.length; index++) {
    sumarCaracteres = sumarCaracteres + nombres3[index].length
}
console.log(`la sumatoria de caracteres es ${sumarCaracteres}`)

*/
//RECORRER UN ARRAY MAS SIMPLE

// for(let nombre of nombres3){
//     console.log(nombre)
// }

//EJERCICIO

//Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas

//esto debe generar un segundo array con ['PEDRO', 'JuaN']



/* const estaEnMinuscula = (str) =>{
    return str == str.toLowerCase()
} 

/*const estaEnMinuscula = (str) =>{
    return !estaEnMinuscula(str)
}

const tieneMaysucula = (str) =>{
    return !estaEnMinuscula(str)
}

const nombres = ['pepe', 'lucas', 'PEDRO', 'JuaN', 'pepeSito']

const mayusculas = [];
for (let nombre of nombres) {
    if(tieneMaysucula(nombre)) {
        mayusculas.push(nombre)
    }
}
for (let elemento of nombres) {
    if (tieneMaysucula(elemento)) {
        mayusculas.push(elemento)
    }
console.log(mayusculas); */


const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
]


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */

//Recorrer el array: Utilizamos un bucle 'for ... of' para recorrer cada objeto en el array productos.
//Condición: Dentro del bucle, verificamos si la propiedad marca del objeto actual es igual a 'samsung'.
//Agregar al nuevo array: Si la condición se cumple, utilizamos el método push para agregar el objeto actual al array samsung.



const samsung = [];

for (const producto of productos) {
    if (producto.marca === 'samsung'){
        samsung.push(producto);
    }
}
console.log (samsung);


/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos

EJEMPLO:
buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]

*/


function buscarProducto (busqueda){
    const arrayProductos = [] 
    for (const producto of productos){
        if (producto.title.toLowerCase().includes(busqueda.toLowerCase())){
            arrayProductos.push(producto)
        }
    }
    return arrayProductos;
}

/* let stringBuscado = prompt('ingrese el nombre del producto que desea buscar')

console.log(buscarProducto(stringBuscado)) */



