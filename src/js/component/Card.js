import React from 'react'
import InCard from './InCard'

const Card = () => {

    let cardsInfoTitle = [
        {title: 'Alps', image: 'https://images.pexels.com/photos/544067/pexels-photo-544067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}, 
        {title: 'Pyrenees', image: 'https://images.pexels.com/photos/131721/pexels-photo-131721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        {title: 'Sierra Nevada', image: 'https://images.pexels.com/photos/14185883/pexels-photo-14185883.jpeg?auto=compress&cs=tinysrgb&w=800'},
        {title: 'Andes', image: 'https://images.pexels.com/photos/5194710/pexels-photo-5194710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]


  return (
    <>
    {cardsInfoTitle.map((card, index)=> {
               
        return <div key={index} className='col d-flex justify-content-center align-items-center'>
               <InCard  title={card.title} image={card.image}  />
              </div> 
    })}
    
    </>
  )
}

export default Card