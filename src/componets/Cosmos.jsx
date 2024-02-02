import React from 'react'
import cosmasImg from '../assets/cosmas/cosmas.png'

export default function Cosmos() {
  return (
    <div className='containerHero'>
        <div className="comos">
           <div className="cosmoWarper">
           <div className="CosImg">
              <img src={cosmasImg} alt="" />
           </div>
           <div className="cosmoText">
            <h2 className='join'>
            Join our weekly digest
            </h2>
            <p className='update'>
            Get exclusive promotions & updates straight to your inbox.
            </p>
            <form>
                <input type="text" placeholder='Enter your email here'/>
                <button className='subcribe'>
                Subscribe
                </button>
            </form>
           </div>
           </div>
        </div>
    </div>
  )
}
