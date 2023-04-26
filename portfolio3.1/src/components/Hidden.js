import React from 'react'

export default function Hidden() {
  return (
    <div className='bg-primary'>
        <div className='container mx-auto h-16 flex items-center text-white justify-between' >
            <a href='#' className='font-kanit hover:text-prp '>
                elchin_gonagov
            </a>

            <nav className='flex items-center font-kanit  gap-x-6 '>
                <a href='#' className='hover:text-prp'>
                    Projects
                </a>
                <a href='#' className='hover:text-prp'>
                    About
                </a>
                <a href='#' className='hover:text-prp'>
                    Contact
                </a>  
            </nav>
        </div>
    </div>
  )
}
