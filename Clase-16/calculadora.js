//RESOLUCION PROFE

const validacionEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    }
    
    const validacionPassword = (password) =>{
    return password && password.length > 6 && tieneMayuscula(password)
    }
    
    const login = () => {
        const usuario = {
            email: null,
            password: null
    }
    
        let email = prompt('ingrese un email')
        while(!validacionEmail(email)){
            email = prompt('Error email invalido: ingrese nuevamente el email')
        }
    
        let password = prompt('Ingrese la password')
        while(!validacionPassword(password)){
            password = prompt('Error password invalida,vuelva a ingresar una password de 6 caracteres y una mayuscula')
        }
        usuario.password = password
    
        alert('Usuario ${ususario.email} registrado')
    
        return usuario
    
    }
    
    // console.log (login())


    //CALCULADORA

    const validacionOperacion = (operacion) =>{
        const OPERACIONES_DISPONIBLES = ['+', '-']
        for(let operacionDisponible of OPERACIONES_DISPONIBLES){
            if(operacionDisponible === operacion){
                return true
            }
        }
        return false
    }
    
    const validacionNumero = (numero) =>{
        return numero && !isNaN(numero)
    }
    
    
    
    const calculadora = () =>{
        let operacion = prompt('Ingrese una operacion')
        while(!validacionOperacion(operacion)){
            operacion = prompt('Error, operacion no disponible, seleccione una operacion')
        }
    
        let a = prompt("Ingrese un primer numero")
        while(!validacionNumero(a)){
            a = prompt("Error numero no valido, ingrese nuevamente")
        }
    
        let b = prompt('Ingrese un segundo numero')
        while(!validacionNumero(b)){
            b = prompt('Error numero no valido, ingrese nuevamente')
        }
    
        let resultado = 0
    
        if(operacion === '+'){
            resultado = Number(a) + Number(b)
        }
        else if(operacion === '-'){
            resultado = Number(a) - Number(b)
        }
    
        alert(`El resultado de ${a} ${operacion} ${b} es ${resultado}`)
    }


    /* 
Mejorar la funcion login para que el objeto retornado lo guarde en localStorage

*/
/* Guardar este objeto en localstorage */
// let usuarioRegistrado = login()

let objetoString = JSON.stringify(login())
localStorage.setItem('usuario', objetoString);


if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}
const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))
const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}

/* Caso correcto */

/* const renderizarHistorial = () =>{
  const historial = obtenerHistorial()
  let listaHistorial = ''
  for(let obj of historial){
    listaHistorial = listaHistorial + `
    Accion: ${obj.accion}
    Operacion: ${obj.operacion}
    Numeros: ${obj.a}, ${obj.b}
    Resultado: ${obj.resultado}
    `
  }
  return listaHistorial
}
alert(renderizarHistorial()) */

/* 
guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 2,
    b: 6,
    resultado: 8,
    fecha:  '17|03/2024'
})
guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 5,
    b: 5,
    resultado: 10,
    fecha:  '27|08/2024'
})

guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 10,
    b: 6,
    resultado: 16,
    fecha:  '31|05/2024'
}) */
/*     guardarEnHistorial({
        accion: 'calculadora',
        operacion: '+',
        a: 10,
        b: 6,
        resultado: 16,
        fecha:  '31|05/2024'
    }) */

/* TODO: Fijate que el historial debe venir de localStorage */

// const renderizarHistorial = () =>{
//     let listaHistorial = ''
//     const historial = obtenerHistorial()
//     for (const objeto of historial){
//         listaHistorial = listaHistorial + `
//         accion: ${objeto.accion}
//         operacion: ${objeto.operacion}
//         numeros: ${objeto.a}, ${objeto.b}
//         resultado: ${objeto.resultado}
//         fecha: ${objeto.fecha}
//         `
//     }
//     return listaHistorial
// }

// alert(renderizarHistorial())
