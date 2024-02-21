import React from 'react'
import {AiOutLineClose, AiOutLineMenu} from "react-icons/ai"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-lime-400">
        <h1 className='w-full text-3xl font-bold text-lime-400'>React.</h1>
        <ul className='flex hidden'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <div>
          <AiOutLineMenu size={20} />
        </div>
    </div>
  )
}
