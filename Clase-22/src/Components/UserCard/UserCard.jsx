import './UserCard.css'
import React from 'react'

const UserCard = (props) => {
  return (
    <div className='user-card'>
        <h3>{props.nombre}</h3>
        <div>Rol: {props.rol}</div>
        <div>Años de experiencia: {props.anios_experiencia}</div>
    </div>
  )
}

export default UserCard