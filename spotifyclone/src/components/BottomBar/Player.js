import { Icon } from 'Icons'
import React from 'react'

export default function Player() {
    return (
        <div className='flex justify-between px-4 items-center h-full'>
            <div className='min-w-[11.25rem] w-[30%]'>
                sol
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-x-2'>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"shuffle"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"playerPrev"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-black bg-white rounded-full hover:scale-1.06'>
                        <Icon size={16} name={"play"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"playerNext"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"repeat"} />
                    </button>
                </div>
                <div>
                    alt
                </div>
            </div>
            <div className='min-w-[11.25rem] w-[30%] flex justify-end '>
                sag
            </div>
        </div>
    )
}
