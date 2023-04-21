import React from 'react'

export default function Playlist() {
    return (
        <nav className='mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto'>
            <ul>
                {new Array(40).fill(<li>
                    <a href="#" className='text-sm  text-link hover:text-white flex h-8 items-center '>
                        22. Calma Listesi
                    </a>
                </li>)}
            </ul>
        </nav>
    )
}
