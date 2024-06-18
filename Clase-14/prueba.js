const nombres2=['maria','pedro','leonel','ezequiel','elias','lucas','julieta','abril','lautaro']
//Eliminar a leonel
//Eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril




/* 
let leonelPosition = names3.indexOf('leonel')
names3.splice(leonelPosition,1)

let lucasPosition = names3.indexOf('lucas')
names3.splice((lucasPosition - 1),1)

let abrilPosition = names3.indexOf('abril')
names3.splice(abrilPosition,0,'sofia')
console.log(names3)
 */

// RESOLUCION EJERCICIO SUMA CARACTERES

let caracteres = 0
for(let index = 0 ; index < nombres2.length; index = index + 1){

    caracteres = caracteres + nombres2[index].length
}
console.log('La cantidad de caracteres es: ' + caracteres)

//codeium