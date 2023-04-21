import logo from "img/logo.svg"
import Menu from "./Sidebar/Menu"
import { Icon } from "Icons"
import Playlist from "./Sidebar/Playlist"
import DownloadApp from "./Sidebar/DownloadApp"


export default function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-col bg-black">
      <a href="#" className="mb-7 px-6">
        <img src={logo} className="h-10" />
      </a>
      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a href="" className="px-6 py-2 flex items-center group text-sm text-link font-semibold hover:text-white ">
              <span className="w-6 h-6 flex items-center justify-center mr-2 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name="plus" size={12}/>
              </span>
              Calma Listesi Olustur
            </a>
          </li>
          <li>
            <a href="" className="px-6 py-2 flex items-center text-sm text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-2 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                <Icon name="heart" size={12}/>
              </span>
              Begenilen Sarkilar
            </a>
          </li>
        </ul>
      </nav>

      <Playlist/>
      <DownloadApp/>
    </aside>
  )
}
