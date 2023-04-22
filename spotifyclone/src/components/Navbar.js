import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";

export default function Navbar() {
  return (
    <div className="h-[3.75rem] flex items-cneter justify-between px-8">
      <Navigation/>
      <Auth/>
    </div>
  )
}
