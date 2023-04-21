import { Icon } from "Icons"
import { NavLink } from "react-router-dom"

export default function Menu() {
  return (
    <nav className="px-2">
        <ul className=" flex flex-col">
            <li>
                <NavLink to={"/"} activeClassName="bg-active text-white"  className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded  hover:text-white px-4">
                    <span>
                        <Icon name="home"/>
                    </span>
                    Ana sayfa
                </NavLink>
            </li>
            <li>    
                <NavLink to={"/search"} activeClassName="bg-active text-white" className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4">
                   <span>
                    <Icon name="search"/>
                   </span>
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink to={"collection"} activeClassName="bg-active text-white" className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4">
                    <span>
                        <Icon name="collection"/>
                    </span>
                    Kitapligin
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
