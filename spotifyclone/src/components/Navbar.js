import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";
import {useMatch} from "react-router-dom";

export default function Navbar() {
  
  const searchRoute = useMatch('/search')

  return (
    <div className="h-[3.75rem] flex items-cneter justify-between px-8">
      <Navigation/>

      {searchRoute &&(
        <div>
          Search kismindasin!
        </div>

      )}


      <Auth/>
    </div>
  )
}
