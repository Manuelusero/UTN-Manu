import React from 'react'
import { ColorCardList } from './Components'
import { colorCardList } from './data'
import Counter from './Components/Counter/Counter.jsx'




function App() {

/*
Reglas de oro:
UN ESTADO ES INMUTABLE
Si queremos modificar el valor de un estado debemos hacerlo con la funcion Setter
Si uso la funcion setter el componente donde se cre el estado se re-renderizara y los componentes hijos
 */

/*
useState es una funcion que nos trae un array con dos valores
Estructura: [valorDelEstado, fnParaCambiarValor]
 */

// const[contador, setContador] = useState (0)

// const handleClickAddButton = () =>{
//   setContador(contador + 1)
// }
// console.log('Me renderizo')

// const handleClickRestButton = () =>{
//   if (contador > 0){
//     setContador(contador - 1);
//   }
 
 


// }
/* 
1)Crear el boton para decrementar

2)El decementador no puede ser menos de 0

3)Si el contador es 10 que no se muestre el boton de <button>+</button>

 */
  return (
    <>

    <ColorCardList colorCardList={colorCardList}/>
    <Counter limit = {3}/>
    {/* <span>{contador}</span>
    {contador < 10 ?<button onClick={handleClickAddButton}>+</button> : <span>No se puede incrementar mas de 10</span>}
    <button onClick={handleClickRestButton}>-</button> */}
    </>
  )
}

export default App