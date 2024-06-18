/* TIPOS DE OBJETOS -- SIEMPRE LOS OBJETOS LOS VAMOS A DELCARAR CON CONST*/

// let edadUsuario = 19

// let nombreUsuario = 'pepe'

// let apellidoUsuario = 'suarez'

//Formato key-value 
 let usuario = {
     'edad' : 19,
     'nombre' : 'pepe',
     'apellido' : 'suarez',
     'mejor amigo ':{
         "nombre" : 'juan'
     }
 }
 console.log(usuario)

/*
Crear un objeto llamado producto que tenga las sig propiedades

precio : number
nombre : string
marca : string
id : number
descripcion : string

*/
/* 
Usamos string para escribir propiedades en caso de que tengan espacios o tildes o - o 'ñ'
*/

let producto ={
    precioUnitario : 25,
    nombre_completo : 'Manuel',
    marca : 'Nike',
    id : 38103825 ,
    descripcion : 'soy una persona'
}

console.log ('El producto' + producto['nombre_completo'] + 'cuesta $' + producto['precioUnitario'])
 //PARA ACCEDER A LA PROPIEDAD SE USAN [] CORCHETES

// const user = {
//     name: 'pepe',
//     lastname: 'suarez',
//     'user preferences':{
//         theme: 'dark-mode',
//         lang: 'spanish'
//     }

// }
/* 
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
*/

// console.log ('El usuario :' + user['name'] + '' + user['lastname'] + 'tiene las preferencias en :' +
// '/n' + user [ 'user preferences']['theme'] +
// '/n' + user ['user preferences']['lang']
// )

const user = {
     name: 'pepe',
     lastname: 'suarez',
     'user preferences': {
         theme: 'dark-mode',
         lang: 'spanish'
     },
     'user info': {
     created_ad:'18/9/2005',
     adress: 'av siempre viva 742',
     tel:'+22 1323-2122'
     }
};

console.log ('El usuario '+ user['name'] + '' + user ['lastname'] + ' creo su cuenta en ' + user['user info'] 
['created_ad'] + ', vive en '
 + user['user info']['adress']
 + 'su telefono es'+ user['user info']['tel']
)


/* Reasignamos el valor de la propiedad name */

user['name'] = 'juan'
user.lastname = 'gomez'
/* Creando una propiedad */
user['isAdmin'] = false
user.isAdmin = true

//NO USAMOS NOTACION DE PUNTOS . SI LA PROPIEDAD TIENE -. ñ, letras con tilde o espacios

/*
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
'El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {adress} y su telefono es {tel}'

/* 
console.log('El usuario '+ user['name'] + ' ' + user['lastname'] +
 ' tiene las preferencias en : ' +
 '\n'+ '-Modo: ' + user['user preferences']['theme']+ 
 '\n'+ '-Lenguaje: ' + user['user preferences']['lang'] 
)

console.log(`
    El usuario ${user['name']} ${user['lastname']} tiene las preferencias en:
    -Modo: ${user['user preferences']['theme']}
    -Lenguaje: ${user['user preferences']['lang']}
`) */

/* console.log('El usuario: '+ user['name'] + ' ' + user['lastname'] + 'creo su cuenta en fecha' + user['user info']['created_at'] + 'vive en ',
'\n'+user['user info']['adress'] + 'y su telefono es ' + user['user info']['tel'])
 */
/* 
console.log('El usuario '+user['name'] + ' ' + user['lastname'] + ' creo la cuenta en :\nModo: '+ user['user info']['created_at']+ ' su telefono es : '+ user['user info']['tel']) */

/* PASAR LOS MENSAJES DE CONSOLA A TEMPLATE STRING, SE UTILIZAN COMILLAS INVERTIDAS */

console.log(`
El usuario ${user.name} ${user.lastname} creó su cuenta en fecha
${user["user info"]["created_at"]}
vive en ${user["user info"] ["adress"]}
y su teléfono es ${user["user info"]["tel"]}
`)

/* Pasar nuestro mensaje a notacion de . siempre que se pueda */
/* 
console.log(`El usuario: ${user.name} ${user.lastname} tiene las preferencias en:
-Modo: ${user['user preferences'].theme}
-Lenguaje: ${user['user preferences'].lang}
`); */

/*
Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}
*/

const calcularIva = (precio, tipo_factura) => {
    let iva = precio * 0.21

    const resultado = {
        precio: null,
        iva: iva,
        precioConIva: precio + iva,
        factura: tipo_factura
    }
    if (tipo_factura == 'C' || tipo_factura == 'B'){
        resultado.precio = precio + iva
    }
    else if(tipo_factura == 'A'){
        resultado.precio = precio
    }
    return resultado
}

console.log(calcularIva(1000, 'A'))
console.log(calcularIva(1000, 'B'))
console.log(calcularIva())