
import { getImageUrl } from '../../utils'

export const Work = () => {
  return (
    <div className='py-5'>
      <h2 className='color2 py-2 poppins-medium'>My projects</h2>

      <div className='flex py-10'>
        <img src={getImageUrl('img/web1.png')} className='h-32'></img>
        <div className='px-3'>
          <h4 className='color2 poppins-regular'><a href='https://elchin901.github.io/web1/Photo.html'>Photo.html</a></h4>
          <p className='color3 text-[12px] poppins-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis ipsa, repellat odio,res exercitationem dolore praesentium deserunt?</p>
        </div>
      </div>
      <div className='flex py-10'>
        <img src={getImageUrl('img/web2.png')} className='h-32'></img>
        <div className='px-3'>
          <h4 className='color2 poppins-regular'><a href='https://elchin901.github.io/web2/Flowie.html'>Flowers</a></h4>
          <p className='color3 text-[12px] poppins-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis ipsa, repellat odio,res exercitationem dolore praesentium deserunt?</p>
        </div>
      </div>
      <div className='flex py-10'>
        <img src={getImageUrl('img/web3.png')} className='h-32'></img>
        <div className='px-3'>
          <h4 className='color2 poppins-regular'><a href='https://elchin901.github.io/web3/Portland.html'>Phones</a></h4>
          <p className='color3 text-[12px] poppins-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis ipsa, repellat odio,res exercitationem dolore praesentium deserunt?</p>
        </div>
      </div>
      <div className='flex py-10'>
        <img src={getImageUrl('img/web4.png')} className='h-32'></img>
        <div className='px-3'>
          <h4 className='color2 poppins-regular'><a href='https://elchin901.github.io/web4/Spotify.html'>Spotify Clone</a></h4>
          <p className='color3 text-[12px] poppins-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis ipsa, repellat odio,res exercitationem dolore praesentium deserunt?</p>
        </div>
      </div>

      <div className='flex justify-center py-5 '>
        <button className='bg-violet-600 hover:bg-violet-900 text-white poppins-medium py-2 px-7 rounded-full'><a href='#'>More</a></button>
      </div>

    </div>
  )
}
