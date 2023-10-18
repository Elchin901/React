import { Navbar } from "./components/Navbar/Navbar"
import {About} from "./components/About/About"
import {Hero } from "./components/Hero/Hero"

function App(){
  return(
    <div>
      <Navbar/>
      <About/>
      <Hero />
    </div>
  )
}

export default App