/* Callback:
Cuando una funcion es pasada por paramentro
 */

function ejecutarAccion (accion) {
    accion()
}

function saludar (){
    console.log('hola')
}

ejecutarAccion(saludar)
ejecutarAccion(function(){
    console.log('saludar')
})

let mensaje = 'hola'

ejecutarAccion('hola')
ejecutarAccion(mensaje)