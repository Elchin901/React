import React from 'react'
import { getImageUrl } from '../../utils'

export const Work = () => {
  return (
    <div className='py-5'>
      <h2 className='color2 py-2'>My projects</h2>

      <div className='flex py-10'>
        <img src={getImageUrl('img/web1.png')} className='h-24'></img>
        <div className='px-2'>
          <h4 className='color2'>Photo.html</h4>
          <p className='color3 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis ipsa, repellat odio,res exercitationem dolore praesentium deserunt?</p>
        </div>
      </div>
      <div className='flex py-10'>
        <img src={getImageUrl('img/web2.png')} className='h-24'></img>
        <div className='px-2'>
          <h4 className='color2'>Photo.html</h4>
          <p className='color3 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis ipsa, repellat odio,res exercitationem dolore praesentium deserunt?</p>
        </div>
      </div>
      <div className='flex py-10'>
        <img src={getImageUrl('img/web3.png')} className='h-24'></img>
        <div className='px-2'>
          <h4 className='color2'>Photo.html</h4>
          <p className='color3 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis ipsa, repellat odio,res exercitationem dolore praesentium deserunt?</p>
        </div>
      </div>
      <div className='flex py-10'>
        <img src={getImageUrl('img/web4.png')} className='h-24'></img>
        <div className='px-2'>
          <h4 className='color2'>Photo.html</h4>
          <p className='color3 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis ipsa, repellat odio,res exercitationem dolore praesentium deserunt?</p>
        </div>
      </div>

    </div>
  )
}
