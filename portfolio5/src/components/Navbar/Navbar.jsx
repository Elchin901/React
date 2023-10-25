import React from 'react'
import {getImageUrl} from '../../utils';

export const Navbar = () => {
  return (
    <div className='text-rose-600 pb-10  '>
      <div className='flex justify-start pt-20'>
        <div>
          <img className='w-[100px] rounded-full' src={getImageUrl('img/g5.webp')}></img>
        </div>
        <div className='pt-6 pl-3 color1 '>
          <h1>Elchin Gonagov</h1>
          <p>Front-End Developer</p>
        </div>
      </div>
    </div>
  )
}
