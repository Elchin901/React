import logo from "img/logo.svg"
import Menu from "./Sidebar/Menu"


export default function Sidebar() {
  return (
    <aside className="w-60 py-6 flex flex-col">
      <a href="#" className="mb-5 px-6">
        <img src={logo} className="h-10" />
      </a>
      <Menu />
    </aside>
  )
}