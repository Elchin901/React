import React from 'react'
import { useSelector } from 'react-redux'

export default function SidebarCover() {
    const current = useSelector(state => state.player.current)    
  return (
    <div className='pt-[100%] relative bg-black '>
        <img src={current.image} className="w-full h-full object-cover absoulute top-0 left-0" alt=""/>
    </div>
  )
}
