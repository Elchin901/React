import { NavLink } from "react-router-dom"
import { Icon } from "Icons"
import SongItem from "./SongItem"

export default function Section({ title, more = false, items }) {

  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more ?? '#'}>
          <h3 className="text-2xl text-white font-semibold tracking-tight" >{title}</h3>
        </NavLink>
        
        {more && (
          <NavLink className={"text-xs hover:underline font-semibold uppercase text-link tracking-wider"} to={more}>
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map(item => <SongItem item={item} key={item.id} />)}
      </div>
    </section>
  )
}
