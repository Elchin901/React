import {BsPlusSquareDotted} from 'react-icons/bs'

export default function Productitem({product}) {
  return (
    <div className="bg-white relative flex flex-col items-center text-center text-sm font-semibold gap-y-1 p-3">
        <button className='absolute top-3 right-3'>
            <BsPlusSquareDotted size={20}/>
        </button>
        <img src={product.image} alt={product.title}/>
        <div>{product.title}</div>
        <div>{product.price}</div>
        <div>{product.alt}</div>
    </div>
  )
}
