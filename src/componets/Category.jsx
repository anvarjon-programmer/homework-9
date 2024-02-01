import React, { useState } from 'react'
import category1 from '../assets/category1.png'
import category2 from '../assets/category2.png'
import category3 from '../assets/category3.png'
import category4 from '../assets/category4.png'
import category5 from '../assets/category5.png'
import category6 from '../assets/category7.png'
import category7 from '../assets/category7.png'
import category8 from '../assets/category9.png'


export default function Category() {
    const [category,setCategory] = useState([
       {
        img:category1,
        title:'Art'
       },
       {
        img:category2,
        title:'Collectibles'
       },
       
       {
        img:category4,
        title:'Photography'
       },
       {
        img:category4,
        title:'Video'
       },
       {
        img:category5,
        title:'Video'
       },
       {
        img:category6,
        title:'Utility'
       },
       {
        img:category7,
        title:'Sport'
       },
       {
        img:category8,
        title:'Virtual Worlds'
       },
    ])
  return (
    <>
    <div className="container max-w-1200 mx-auto categoryy">
    <h1 className='category--title text-white text-5xl font-semibold mb-8'>Browse Categories</h1>
    <div className="grid grid-cols-4 grid-rows-2 gap-8">
        {
            category.map((item, index) => {
                return (
                    <div key={index} className="category-card">
                        <img className='category-img w-full' src={item.img} alt={item.title} />
                        <h3 className='categoryCard-title text-white text-base mt-2'>{item.title}</h3>
                    </div>
                )
            })
        }
    </div>
</div>

    </>
  )
}
