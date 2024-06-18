### Calculadora

## Funcionalidades:

-Login
-Solicitar un email
-Solicitar un password

-Calcular Operaciones
-Operaciones Disponibles: 1) + 2) -

-Historial
-agregarAlHistorial
-mostrarHistorial/renderizarHistorial

## Utilidades:

-Validaciones:
-numero
-password
-email
-operacionesCalculadora

## Reglas:

Los ejerciocios se pueden resolver de muchas formas
Si crees necesario usar funciones, las podes usar
Cumplir en la medida de lo posible con el principio: DRY, KISS

ESTO ESTA MAL:
function a(n){
return abc-z
}
let v = '1.1.1'

## Login

Debo tener una funcion llamada login que active toda la logica del login

Logica de login:

Vamos a solicitar al usuario un email
Validaremos que el email sea un email

/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')

Vamos a solicitar al usuario una password
validar que tenga mas de 6 caracteres, que tenga almenos 1 mayuscula y que no sea '' o null

Si todo esta correcto dira por alerta('Usuario {email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:
login() //retorna el usuario {
email: 'value@gmail.com',
password: 'Pepe123'
}

## Calculadora de operaciones

Crear una funcion llamada calculadora() que de inicio a la sig logica
-Operaciones Disponibles: 1) + 2) -

Solicitar una operacion y verificar que la operacion sea valida(es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultdo por alerta de la sig manera:
'El resultado de {numero1} {operacion} es {resultado}'

## Historial

-agregarAlHistorial
-mostrarHistorial/renderizarHistorial

ESTO NO ES UNA FUNCION

Van a intentar obtener el historial del localStorage si nos devuelve null el getItem deberemos guardar un array vacio en el local storage

Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial(debe retornar un array)

Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y lo guarde en el local storage dentro del array historial

EJEMPLO DE USO:

obtenerHistoria() => retornar a un array historia [{}, {}]
guardarEnHistorial(objeto) => agrega al array guardado en localStorage el objeto recibido

Cada elemento del historial tendra el siguiente formato
{
accion: 'calculadora',
operacion: '+'|| '-',
a: number,
b: number,
result: number
fecha: dd/mm/aaaa || '18|01/2020'
}
Esto significa que cuando usemos guardarEnHistorial debemos guardar el objeto de esa manera

Vamos a crear una funcion llamada renderizarHistorial

Por cada elemento del historial vamos a crear la sig plantilla

`
Accion: {accion}
Operacion: {operacion}
Numeros: {a}, {b}
Resultado: {resultado}
Fecha: {fecha}`

y la acumularan en un string y mal finalizar el recorrido mostraran el string por alerta

Para hacer el ejercicio recuerden previamente guardar algunas operaciones en el historial

guardarEnElHistorial({
accion: 'calculadora',
operacion: '+',
a: 3,
b: 3,
resultado: 6,
fecha: '18|01/2020'
})
