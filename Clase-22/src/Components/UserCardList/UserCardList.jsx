import React from 'react'
import UserCard from '../UserCard/UserCard'

const UserCardList = (props) => {
    return (
        <div className='contenedor-usuarios'>
            {   
                props.usuarios.map((usuario) => {
                    return (
                        <UserCard
                            nombre={usuario.nombre} 
                            rol={usuario.rol} 
                            anios_experiencia={usuario.anios_experiencia} 
                        />
                    )
                })
            }
        </div>
    )
}

export default UserCardList