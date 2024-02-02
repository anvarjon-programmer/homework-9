import React from 'react'
import { useState } from 'react'
import weloot1 from '../assets/cosmas/W1.png'
import weloot2 from '../assets/cosmas/w2.png'
import weloot3 from '../assets/cosmas/w3.png'

export default function Works() {

    const [work,setWork] = useState([
        {img:weloot1},
        {img:weloot2},
        {img:weloot3},
        
    ])
  return (
    <div className='containerHero'>
        <div className="works">
           <h2 className='howItWorks'>How it works</h2>
           <p className='
           getStart'>How it worksFind out how to get started</p>

           <div className="worksCard">
              {
                work.map((item)=>{
                    return(
                        <div className="workCard">
                            <img src={item.img} alt="" />
                        </div>
                    )
                })
              }
           </div>
        </div>
    </div>
  )
}
