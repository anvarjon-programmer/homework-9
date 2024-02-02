import React from 'react';
import logo from "../assets/logo.png";
import icons from '../assets/Icons.png';

export default function Footer() {
  return (
    <div className='footter bg-gray-800'>
      <div className="footer containerHero">
        <div className="footer-wraper flex justify-between">
          <div className="nft">
            <img src={logo} alt="Logo" className="ui max-w-ful" />
            <ul className="list-none">
              <li className='ui text-white text-lg'>NFT marketplace UI created with Anima for Figma.</li>
              <li className='joinOur text-white text-lg'>Join our community</li>
              <img src={icons} alt="Icons" />
            </ul>
          </div>
          <div className="explore">
            <h3 className='explore-title text-white text-3xl font-semibold'>Explore</h3>
            <ul className="list-none">
              <li className='pp text-white text-lg'>Marketplace</li>
              <li className='pp ranking text-white text-lg'>Rankings</li>
              <li className='pp text-white text-lg'>Connect a wallet</li>
            </ul>
          </div>
          <div className="diyest">
            <h3 className='explore-title text-white text-3xl font-semibold'>Join our weekly digest</h3>
            <ul className="list-none">
              <li className='pp ranking text-white text-lg'>Get exclusive promotions & updates straight to your inbox.</li>
            </ul>
            <form>
              <input type="text" placeholder='Enter your email here' className="text-black" />
              <button className='subcribe bg-blue-500 text-white px-4 py-2'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
    