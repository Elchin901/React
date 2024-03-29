import { Icon } from 'Icons'
import { useNavigate } from "react-router-dom"


export default function Navigation() {

    const navigate = useNavigate()

  return (
    <nav className='gap-x-4 flex items-center'>
        <button onClick={()=>navigate(-1)} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon size={22} name="prev"/>
        </button>
        <button onClick={()=>navigate(+1)} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon size={22} name="next"/>
        </button>
    </nav>
  )
}
