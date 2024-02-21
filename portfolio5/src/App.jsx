import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About"
import { Hero } from "./components/Hero/Hero"
import { Work } from "./components/Work/Work"
import { Links } from "./components/Links/links"


function App() {
  return (
    <div className="bg-black">
      <div className="mx-auto  w-[500px] flex-auto">
        <Navbar />
        <About />
        <Hero />
        <Work/>
        <Links/>

      </div>

    </div>
  )
}

export default App