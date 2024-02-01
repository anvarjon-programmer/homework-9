import React, { Fragment, useState } from 'react';
import Logo from '../assets/logo.png';
import heroImg from '../assets/heroIMG.png';
import { IoIosRocket } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export default function Header() {
    const [heroText,setHeroText] = useState([
        {title:"Discover digital art & Collect NFTs"},
        {text:"NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists."},
        {heroImg:heroImg}
    ])
  return (
    <Fragment>
      <header className="">
        <nav className="container">
          <div className="flex items-center justify-between py-6">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
            <ul className='flex gap-20'>
              <li>
                <a className='text-white' href="#">Marketplace</a>
              </li>
              <li>
                <a className='text-white' href="#">Rankings</a>
              </li>
              <li>
                <a className='text-white' href="#">Connect a wallet</a>
              </li>
              <button className='flex items-center justify-center w-32 h-12 rounded-full bg-purple-600 text-white font-bold'>
                <FaUser className="mr-2" />
                Sign Up
              </button>
            </ul>
          </div>
        </nav>
        <div className="bg-gray-900">
          <div className="containerHero">
            <div className="flex justify-between items-center">
              <div className="text-side">
                  {
                      heroText.map((item,index) =>{
                          return(<>
                              <h1 className='hero-text text-6xl font-semibold text-white leading-11'>
                                  {item.title}
                              </h1>
                            <p className='text-white text-lg font-normal max-w-510 my-8'>
                                {item.text}
                            </p>
                            </>
                        )
                    })
                  }
                <button className='flex items-center justify-center w-32 h-12 rounded-full bg-purple-600 text-white font-bold'>
                  <IoIosRocket className="mr-2" />
                  Get Started
                </button>
                <div className="flex mt-7 gap-x-10">
                  <div className="text-white">
                    <h2 className='text-2xl font-semibold'>240+</h2>
                    <p className='text-lg'>Total sale</p>
                  </div>
                  <div className="text-white">
                    <h2 className='text-2xl font-semibold'>240+</h2>
                    <p className='text-lg'>Total sale</p>
                  </div>
                  <div className="text-white">
                    <h2 className='text-2xl font-semibold'>240+</h2>
                    <p className='text-lg'>Total sale</p>
                  </div>
                </div>
              </div>
              <div className="img-side">
                {
                    heroText.map((item) =>{
                        return(
                            <img src={item.heroImg} alt="" />
                        )
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
