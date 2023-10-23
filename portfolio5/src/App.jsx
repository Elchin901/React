import { Navbar } from "./components/Navbar/Navbar"
import {About} from "./components/About/About"
import {Hero } from "./components/Hero/Hero"

function App(){
  return(
    <div className="container mx-auto  w-[500px] ">
      <Navbar/>
      <About/>
      <Hero />
    </div>
  )
}

export default App