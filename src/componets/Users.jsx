import React, { useState } from 'react'
import First from '../borederImg/1.png';
import second from '../borederImg/2.png';
import third from '../borederImg/3.png';
import fourths from '../borederImg/4.png';
import fifth from '../borederImg/5.png';
import sixs from '../borederImg/6.png';
import seventh from '../borederImg/7.png';
import eight from '../borederImg/8.png';
import nine from '../borederImg/9.png';
import ten from '../borederImg/10.png';
import eleven from '../borederImg/12.png';
import twelf from '../borederImg/13.png';
// import fourth from '../borederImg/14.png'
// import end from '../borederImg/10.png';
import { IoIosRocket } from "react-icons/io";

export default function () {
    const [user,setUser] = useState([
        {
            id:1,
            img:First,
            title:'Keepitreal',
            des:"Total Sales :34.53 ETH"
        },
        {
            id:2,
            img:second,
            title:'DigiLab',
            des:"Total Sales:34.53 ETH"
        },
        {
            id:3,
            img:third,
            title:"GravityOne",
            des:"Total Sales:34.53 ETH"

        },
        {
            id:4,
            img:fourths,
            title:'Juanie',
            des:"Total Sales:34.53 ETH"

        },
        {
            id:5,
            img:fifth,
            title:"BlueWhale",
            des:"Total Sales:34.53 ETH"
        },
        {
            id:6,
            img:sixs,
            title:"mr fox",
            des:"Total Sales:34.53 ETH"
        },
        {
            id:7,
            img:seventh,
            title:"Shroomie",
            des:"Total Sales:34.53 ETH"
        },
        {
            id:8,
            img:eight,
            title:"robotica",
            des:"Total Sales:34.53 ETH"
        },
        {
            id:9,
            img:nine,
            title:"RustyRobot",
            des:"Total Sales:34.53 ETH"
        },
        {
            id:10,
            img:ten,
            title:"animakid",
            des:"Total Sales:34.53 ETH"
        },
        {
            id:11,
            img:eleven,
            title:"Dotgu",
            des:"Total Sales:34.53 ETH"
        },
        {
            id:12,
            img:twelf,
            title:"Ghiblier",
            des:"Total Sales:34.53 ETH"
        },
        



    ])
  return (
    <div className='containerHero'>
            <div className="uer-nav">
                <div>
                <h2 className='userNav-title'>Top creators</h2>
                <p className='userNav-text'>Checkout Top Rated Creators on the NFT Marketplace</p>
                </div>
                <button className='userNav-btn'>
                <IoIosRocket className="mr-2" />
                View Rankings
                </button>
            </div>
        <div className="userWraper">
            {
                user.map((item) =>{
                    return(
                        <div className="card">
                            <div className='user__id'>
                               <p className='user-id'>{item.id}</p>
                            </div>
                          <img className='user-img' src={item.img} alt="" />
                          <h3 className='user--title'>{item.title}</h3>
                          <p className='user-des'>{item.des}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
