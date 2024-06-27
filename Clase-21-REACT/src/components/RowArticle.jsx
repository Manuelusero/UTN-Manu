import React from 'react'

const RowArticle = (props) => {

  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.direccion_autor}</h2>
      <span>{props.fecha}</span>
    </div>
  )
}

export default RowArticle
