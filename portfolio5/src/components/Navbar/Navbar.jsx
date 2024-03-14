
import {getImageUrl} from '../../utils';

export const Navbar = () => {
  return (
    <div className='text-rose-600 pb-10 poppins-medium'>
      <div className='flex  justify-start pt-20'>
        <div>
          <img className='w-[100px] rounded-full' src={getImageUrl('img/g5.webp')}></img>
        </div>
        <div className='pt-6 pl-3  '>
          <h1 className='color1'>Elchin Gonagov</h1>
          <p className='color2'>Junior Front-End Developer</p>
        </div>
      </div>
    </div>
  )
}
