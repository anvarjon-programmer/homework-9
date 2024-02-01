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
    {wallet:'https://media.istockphoto.com/id/917484660/photo/flat-lay-image-of-accessory-clothing-man-or-women-to-plan-travel-in-holiday-background-concept.jpg?s=2048x2048&w=is&k=20&c=QjZaNg6x8ykxkZWOmloy06fwoVWNqcwKpfpbbsJH4GI='},
    {wallet:'https://media.istockphoto.com/id/1162417848/photo/credit-cards-in-wallet.jpg?s=612x612&w=0&k=20&c=l3fTPD_ymTsOkZL8gnkLShxKlFZJTRA3_ongVuDJRJM='},
    {wallet:'https://media.istockphoto.com/id/917484660/photo/flat-lay-image-of-accessory-clothing-man-or-women-to-plan-travel-in-holiday-background-concept.jpg?s=2048x2048&w=is&k=20&c=QjZaNg6x8ykxkZWOmloy06fwoVWNqcwKpfpbbsJH4GI='},
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

