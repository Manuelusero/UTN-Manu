import React from 'react'
import './ColorCard.css'

const ColorCard = (props) => {
  return (
    <div className='contenedor'>
        {props.colors.map((color, index) => {
            return (<div className='caja-color' key={index} style={{backgroundColor : color}}></div>)
         }
        )}
    <div className='info'>
        <span>❤️{props.likes}</span>
        <span>{props.fecha}</span>
        </div>

    </div>

  )
}

export default ColorCard
