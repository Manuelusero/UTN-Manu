import React from 'react'
import Button from './Components/Button/Button'
import Layout from './Components/Layout'
import UserCard from './Components/UserCard/UserCard'
import UserCardList from './Components/UserCardList/UserCardList'

function App() {

 /* 
  La callback se ejecuta por cada elemento del array, y se le pasara dicho elemento por parametro
  Lo que retorne la callback va a ser el elemento nuevo agregado al array resultante

  MAP: retorna array
  */

 /*  const result = nombres.map((nombre) =>{ 
    return '<div>' + nombre + '</div>'
  })
  console.log(result) */
  /* 
  [
    '<div>pepe</div>',
    '<div>juan</div>',
    '<div>diego</div>',
    '<div>maria</div>'
  ]
  */
  const nombres = ['pepe', 'juan', 'diego', 'maria']
  const listaJSXNombres = nombres.map((nombre) => {
    return <div>{nombre}</div>
  })
/* 
  const listaJSXNombres = [
    <div>Pepe</div>,
    <div>Juan</div>,
    <div>Maria</div>
  ] */

  const usuarios = [
    {
      nombre: 'Pepe',
      rol: 'web developer',
      anios_experiencia: 14
    },
    {
      nombre: 'Julieta',
      rol: 'SEO Master',
      anios_experiencia: 10
    }
  ]
 
  return (
    <div>
      <h2>Nombres</h2>
      {listaJSXNombres}
      <div style={{backgroundColor: 'red', width: '200px', height: '200px'}} className='caja-especial'></div>
      <Button>Click me</Button>
      <UserCardList usuarios={usuarios}/>
    </div>
  )
}







const ContactScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de contacto</h2>
      <pre>
        <code data-lang='html'>
          {`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/>
            </svg>`}
        </code>
      </pre>

      <form action="">

      </form>
      <Button>
        Click <i class="bi bi-window-sidebar"></i>
      </Button>
    </Layout>
  )
}
const ProductsScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de productos</h2>
      <h3>Este es el subtitulo</h3>

    </Layout>
  )
}





export default App
