import React from 'react'
import { Icon } from 'Icons'
import { NavLink } from 'react-router-dom'

export default function SongItem() {
    const imageStyle = item =>{

        switch(item.type) {
    
          case 'artist':
          return 'rounded-full'
    
          case 'podcast':
            return 'rounded-xl'
    
          default:
            return 'rounded'  
    
        }
      }
  return (
    <div>
        <NavLink
            key={item.id}
            to="/"
            className={'bg-footer p-4 rounded hover:bg-active group'}>

            <div className="pt-[100%] relative mb-4">
              <img src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} />
              <button className="w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom bottom-2 right-2 hidden items-center justify-center">
                <Icon name="play" size={16}/>
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">{item.title}</h6>
            <p className="line-clamp-2 text-link text-sm mt-1">{item.describetion}</p>
            
          </NavLink>
    </div>
  )
}
