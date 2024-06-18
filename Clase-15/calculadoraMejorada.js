// const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

// const validacionEmail = (email) => {
//     return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
//     }
    
//     const validacionPassword = (password) =>{
//     return password && password.length >= 6 && tieneMayuscula(password)
//     }
    
// const solicitarDato = (objetoDeconfeccion) => {
//     let dato = prompt(objetoDeconfeccion.mensaje)
//     while (!objetoDeconfeccion.validacion(dato)){
//         dato = prompt(objetoDeconfeccion.error)
//     }
//     return dato
// }

// const DATOS ={
//     EMAIL: {
//         mensaje: 'Ingrese un email, por favor',
//         error: 'Error email invalido: ingrese nuevamente el email',
//         validacion: validacionEmail
//     },

//     PASSWORD: {
//         mensaje:'Ingrese una password',
//         error: 'Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula',
//         validacion: validacionPassword
//     }
// }    

//     const login = () => {
//         const usuario = {
//             email: null,
//             password: null
//     }
   
//         let email = prompt('ingrese un email')
//         while(!validacionEmail(email)){
//             email = prompt('Error email invalido: ingrese nuevamente el email')
//         }
//         usuario.email = email
        

//         let password = prompt('Ingrese la password que tenga mas de 6 caracteres y una mayuscula')
//         while(!validacionPassword(password)){
//             password = prompt('Error password invalida,vuelva a ingresar una password de 6 caracteres y una mayuscula')
//         }
//         usuario.password = password
    
//         alert('Usuario ${usuario.email} registrado')
    
//         return usuario
    
//     }
    
//     console.log (login())

//CALCULADORA

// Función que verifica si la operación es válida
const isValidOperation = (operation) => {
    return operation === '1' || operation === '2';
};

// Función que solicita una operación al usuario y valida la entrada
const promptForOperation = () => {
    let operation = prompt('Seleccione una operación: 1) + 2) -');
    // Sigue solicitando hasta que la operación sea válida
    while (!isValidOperation(operation)) {
        alert('Operación no válida. Por favor, seleccione una operación válida: 1) + 2) -');
        operation = prompt('Seleccione una operación: 1) + 2) -');
    }
    return operation;
};

// Función que solicita un número al usuario y valida la entrada
const promptForNumber = (promptText) => {
    let number = parseFloat(prompt(promptText));
    // Sigue solicitando hasta que se ingrese un número válido
    while (isNaN(number)) {
        alert('Entrada no válida. Por favor, introduzca un número.');
        number = parseFloat(prompt(promptText));
    }
    return number;
};

   // Función principal de la calculadora
const calculadora = () => {
    const operation = promptForOperation(); // Solicita y valida la operación
    const number1 = promptForNumber('Ingrese el primer número:'); // Solicita y valida el primer número
    const number2 = promptForNumber('Ingrese el segundo número:'); // Solicita y valida el segundo número

    let result;
    let operationSymbol;

    // Realiza la operación según la selección del usuario
    if (operation === '1') {
        result = number1 + number2;
        operationSymbol = '+';
    } else if (operation === '2') {
        result = number1 - number2;
        operationSymbol = '-';
    }

    // Muestra el resultado al usuario
    alert(`El resultado de ${number1} ${operationSymbol} ${number2} es ${result}`);
};

// Para ejecutar la calculadora
calculadora();