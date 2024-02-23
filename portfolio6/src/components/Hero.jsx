import React from 'react'
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className='text-white'>
        <div className='text-center mx-auto max-w-[800px] mt-[-96px] w-full h-screen flex flex-col justify-center'>
            <p className='font-bold p-2 text-green-300'>GROWING WITH DATA ANALYSTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>fast,flexible financing for</p>
                <ReactTyped
                className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                strings={['BTM','BTC','SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analystics to increase revenue for BTB, BTC and SASS platforms</p>
            <button className='bg-lime-400 w-[200px] rounded-md text-black font-medium my-6 mx-auto py-3'>Get Started</button>
        </div>

    </div>
  )
}
