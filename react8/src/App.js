import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Demo from "./Demo";


function App(){
    return(
        <div className="App">
            <Demo/>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/experience" element={<Experience/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;