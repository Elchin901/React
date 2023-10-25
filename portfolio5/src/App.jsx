import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About"
import { Hero } from "./components/Hero/Hero"
import { Work } from "./components/Work/Work"

function App() {
  return (
    <div className="bg-black">
      <div className="mx-auto w-[500px]">
        <Navbar />
        <About />
        <Hero />
        <Work/>
      </div>

    </div>
  )
}

export default App