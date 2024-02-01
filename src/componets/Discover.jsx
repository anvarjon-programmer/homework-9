// import { FaEye } from "react-icons/fa";
import React, { Fragment } from 'react'
import { FaEye } from "react-icons/fa";
import discover1 from '../assets/dicover1.png';
import discover2 from '../assets/discover2.png';
import discover3 from '../assets/discover3.png';
import { useState } from 'react';

export default function () {
    const [discover,setDicover] = useState([
        {img:discover1},
        {img:discover2},
        {img:discover3},
    ])
  return (
    <Fragment>
        <div className='containerHero'>
        <div className="discoverNav">
            <div className="discover-text">
                <h2 className='discover--title'>Discover More NFTs</h2>
                <p className='discover--text'>Explore new trending NFTs</p>
            </div>
            <button className='userNav-btn'>
                 <FaEye />
                 See All
            </button>
        </div>
        <div className="discoverCard-wraper flex">
            {
                discover.map((item)=>{
                    return(
                        <>
                          <img src={item.img} alt="" />
                        </>
                    )
                })
            }
        </div>
    </div>
        <div className='bgImg'>
         <div className="containerHero">
            <div className="right-side">
                <h2 className='magic'>Magic Mashrooms</h2>
                <button className='mushroom-btn'>
                </button>
            </div>
         </div>
        </div>
    </Fragment>
  )
}
