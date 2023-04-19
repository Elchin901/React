

export default function Menu() {
  return (
    <nav className="px-2">
        <ul className=" flex flex-col">
            <li>
                <a href="#" className="h-10 flex items-center text-sm font-semibold text-white rounded bg-active hover:text-white px-4">
                    Ana sayfa
                </a>
            </li>
            <li>
                <a href="#" className="h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4">
                    Ara
                </a>
            </li>
            <li>
                <a href="#" className="h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4">
                    Kitapligin
                </a>
            </li>
        </ul>
    </nav>
  )
}
