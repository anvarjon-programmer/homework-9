import React from 'react'
import logo from "../assets/logo.png"
import icons from '../assets/Icons.png'

export default function Footer() {
  return (
    <div className='footter'>
        <div className="footer containerHero">
            <div className="footer-wraper">
            <div className="nft">
                <img src={logo} alt="" />
                <li className='ui pp'>NFT marketplace UI created with Anima for Figma.</li>
                <li className='joinOur pp'>Join our community</li>
                 <img src={icons} alt="" />
            </div>
            <div className="explore">
                <h3 className='explore-title'>Explore</h3>
                <li className='pp'>Marketplace</li>
                <li className='pp ranking'>Rankings</li>
                <li className='pp'>Connect a wallet</li>
            </div>
            <div className="diyest">
                <h3 className='explore-title'>Join our weekly digest</h3>
                <li className='pp ranking'>Get exclusive promotions & updates straight to your inbox.</li>
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
