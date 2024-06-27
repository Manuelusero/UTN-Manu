import React from 'react'
import {nombre as pepe, persona} from './funciones'
import { Button } from './components/Boton'
import Carta from './components/Carta'
import RowArticle from './components/RowArticle'
import sumar from './components/variables'


/* 
Los archivos .jsx permiten la sintaxis JSX (html)
*/

// function App() {

//   return (
//     <div>
//       <h1>HOLA</h1>
//       <Button/>
//       <Carta/>
//     </div>
//   )
//   }
  
console.log(persona)

const App = () => {
  let nombreUsuario = 'user'
  const obtenerRandom = () => 'dato random'

  return (
<>

     <div>
        <h1>HOLA {nombreUsuario}</h1>
         <Button
           texto= {'boton 1'}
           />
         <Carta />
    </div>
      
      <div>
      <h1>HOLA {obtenerRandom ()}</h1>
          <Button texto={'agregar a favoritos'} />
          <Carta />
       </div>

       <div>

        <RowArticle titulo={'lift off-mdn...'}fecha={'4 month ago'}direccion_autor={'developer.mozilla.org'}/>
        <RowArticle titulo={'lift off-mdn...'}fecha={'4 month ago'}direccion_autor={'developer.mozilla.org'}/>
        <RowArticle titulo={'lift off-mdn...'}fecha={'4 month ago'}direccion_autor={'developer.mozilla.org'}/>
       
       </div>
</>
  )
}



  /*
  Las funciones que retornan HTML/JSX se llamaran como Componentes los componentes es buena practica declararlos con mayuscula
  */

  /*el fragmento (<> </>) nos permite hacer una etiqueta padre que al instanciarse/invocarse el componente se desechara */


export default App
