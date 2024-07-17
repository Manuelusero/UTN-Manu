import React from 'react'
import { useState } from 'react'


const Counter = ({limit}) => {
    
const[contador, setContador] = useState (0)

const handleClickAddButton = () =>{
  setContador(contador + 1)
}
console.log('Me renderizo')

const handleClickRestButton = () =>{
  if (contador > 0){
    setContador(contador - 1);
  }
 
  return (
    <>
    <span>{contador}</span>
    {contador < {limit} ?<button onClick={handleClickAddButton}>+</button> : <span>No se puede incrementar mas de 10</span>}
    <button onClick={handleClickRestButton}>-</button>
    </>
  )
  
}
}

export default Counter
