import React from 'react'
import ColorCard from '../ColorCard/ColorCard'

const ColorCardList = (props) => {
  return (
    <div>
      {props.cards.map((card) => {
        return( <ColorCard
                 key={card.id} 
                 colors={card.colors}
                 likes={card.likes}
                 fecha={card.fecha}
                 />
        )
         }
          )
          }
    </div>
  )
}

export default ColorCardList
