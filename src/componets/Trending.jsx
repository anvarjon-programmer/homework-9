import React from 'react'
import { useState } from 'react'
import firstCard from '../assets/first-card.png';
import secondCard from '../assets/seconCard.png';
import thirdCard from '../assets/thirdCard.png'

export default function Trending() {
  const [trendingCard,setTerndingCard] = useState([
    {Img:firstCard},
    {Img:secondCard},
    {Img:thirdCard},
  ])
  

  console.log(trendingCard)
  

return (
<>
   
   <div className="containerHero">
    <div className="Wraper--trending">
      <h2 className='treNding-text'>Trending Collection</h2>
      <p className='ternding-text'>Checkout our weekly updated trending collection.</p>
    <div className='containerHero flex  justify-between'>
      {
        trendingCard.map((item)=>{
          return(
            <>
              <div className="img-wraper">
                 <img src={item.Img} alt="image" />
              </div>
            </>
          )
        })
      }
    </div>
    </div>
   </div>
</>
  )
}

