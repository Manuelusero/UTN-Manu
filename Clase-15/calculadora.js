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
    
    console.log (login())


    // const validacionOperacion = (operacion) =>{
    //     const OPERACIONES_DISPONIBLES = ['+', '-']
    //     for(let operacionDisponible of OPERACIONES_DISPONIBLES){
    //         if(operacionDisponible === operacion){
    //             return true
    //         }
    //     }
    //     return false
    // }
    
    // const validacionNumero = (numero) =>{
    //     return numero && !isNaN(numero)
    // }
    

    /* 
    ## Calculadora de operaciones

Alternativa mejor

const validacionOperacion = (operacion) =>{
    const OPERACIONES_DISPONIBLES = ['+', '-']
    return OPERACIONES_DISPONIBLES.includes(operacion)

}
*/

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