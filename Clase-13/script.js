/* 
Crear una funcion que dado 3 valores nos devuelva la sumatoria

calcularSumatoria(1,2,3) => 6

Crear una funcion que reciba 2 numeros y siempre devuelva el mayor

mayor(7,2) 7

crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com'

generarEmail('pepe') => 'pepe@gmail.com'
*/

//1 MAS COMPLETO
function calcularSumatoria(a, b, c){
    let sumatoria = a + b + c
    return sumatoria
}
console.log(calcularSumatoria(1, 2, 3))

//1 MAS RESUMIDO
function sumatoria (a,b,c){
    return a+b+c
}

//2

function mayor(a, b){
    if(a > b){
        return a 
    } else{
        return b
    }
}

//3

function generarMail(nombreDeUsuario){
    return String(nombreDeUsuario + '@gmail.com')
}


const calcularSumatoria = (a, b, c) => a + b + c

console.log(calcularSumatoria)(1, 2, 3)

console.log(sumar(8, 8))


/*
VALIDAR STRING
*/


const solicitar_y_validar_string = () => {
    let stringSolicitado = prompt("Ingrese un dato")
    while(!stringSolicitado || !isNaN(stringSolicitado)){
        alert('ERROR: Dato ingresado debe ser un string')
    stringSolicitado = prompt('Ingrese otro dato nuevamente')
}
return stringSolicitado
}


/* 
CONVERTIR ESTAS FUNCIONES EN ARROW FUNCTIONS
function mayor(a, b){
    if(a > b){
        return a
    } else{
        return b
    }
}
function generarMail(nombreDeUsuario){
    return String(nombreDeUsuario + '@gmail.com')
}
function sumar(a, b){
    a = Number(a)
    b = Number(b)
    return a + b + undefined
}
*/

//1 

const calcularSumatoria2 = (a, b, c) => a + b + c
 const obteberMayor = (a , b)=>{
    if(a > b){
        return a;
    }else{
        return b;
    }

 }

 //2 

 const generarEmail = (usuario) => usuario+'@gmail.com'

 //3
 const sumar = (a, b,) => Number(a) + Number(b)